import { createGridEngine } from './src/index.js';
import readline from 'readline';

// 1. אתחול המנוע
const { grid, tiles, entities } = createGridEngine(12, 12);

// 2. רישום אריחים
tiles.register('FLOOR', { char: '·', walkPassable: true });
tiles.register('WALL', { char: '▒', walkPassable: false });

// 3. רישום ישויות - שים לב לשינוי במבנה ה-COIN
entities.register('PLAYER', {
    char: '☺',
    defaultComponents: {
        health: { current: 3, max: 3 },
        score: { total: 0 }
    }
});

entities.register('COIN', {
    char: '$',
    defaultComponents: { 
        value: { amount: 10 } 
    }
});

entities.register('TRAP', {
    char: '^',
    defaultComponents: { 
        damage: { amount: 1 } 
    }
});

// 4. בניית המפה
grid.addLayer('terrain', tiles.get('FLOOR'));
grid.addLayer('entities', null);

for (let i = 0; i < 12; i++) {
    grid.setCell('terrain', { row: 0, col: i }, tiles.get('WALL'));
    grid.setCell('terrain', { row: 11, col: i }, tiles.get('WALL'));
    grid.setCell('terrain', { row: i, col: 0 }, tiles.get('WALL'));
    grid.setCell('terrain', { row: i, col: 11 }, tiles.get('WALL'));
}

// 5. הוספת אובייקטים
const player = entities.create('PLAYER');
let playerPos = { row: 1, col: 1 };
grid.setCell('entities', playerPos, player);

grid.setCell('entities', { row: 3, col: 5 }, entities.create('COIN'));
grid.setCell('entities', { row: 8, col: 2 }, entities.create('COIN'));
grid.setCell('entities', { row: 5, col: 8 }, entities.create('COIN'));
grid.setCell('entities', { row: 4, col: 4 }, entities.create('TRAP'));
grid.setCell('entities', { row: 7, col: 7 }, entities.create('TRAP'));

// 6. פונקציית רינדור
function render(message = "") {
    process.stdout.write('\x1Bc');
    let board = "";
    for (let r = 0; r < 12; r++) {
        for (let c = 0; c < 12; c++) {
            const ent = grid.getCellValue('entities', { row: r, col: c });
            const ter = grid.getCellValue('terrain', { row: r, col: c });
            board += (ent ? ent.char : ter.char) + " ";
        }
        board += "\n";
    }

    const hp = player.getComponent('health') || { current: 0 };
    const score = player.getComponent('score') || { total: 0 };

    console.log(board);
    const hearts = hp.current > 0 ? "♥".repeat(hp.current) : "DEAD";
    console.log(`HP: ${hearts} | Score: ${score.total}`);
    console.log(`Message: ${message}`);
    console.log("\n[W,A,S,D] to Move | [Q] or [Ctrl+C] to Exit");
}

// 7. לוגיקת המשחק
function handleMove(dRow, dCol) {
    const nextPos = { row: playerPos.row + dRow, col: playerPos.col + dCol };
    const tile = grid.getCellValue('terrain', nextPos);

    if (!tile || !tile.walkPassable) {
        render("Ouch! That's a wall.");
        return;
    }

    const target = grid.getCellValue('entities', nextPos);
    let msg = "Walking...";

    if (target) {
        if (target.char === '$') {
            const coinData = target.getComponent('value');
            const currentScore = player.getComponent('score');
            currentScore.total += coinData.amount;
            player.addComponent('score', currentScore);
            msg = `Found a coin! +${coinData.amount} points.`;
        } 
        else if (target.char === '^') {
            const trapData = target.getComponent('damage');
            const currentHP = player.getComponent('health');
            currentHP.current -= trapData.amount;
            player.addComponent('health', currentHP);
            msg = `OUCH! Trap! HP is now ${currentHP.current}`;

            if (currentHP.current <= 0) {
                render("GAME OVER! You died.");
                process.exit();
            }
        }
    }

    if (grid.move('entities', playerPos, nextPos)) {
        playerPos = nextPos;
        render(msg);
    }
}

// 8. ניהול קלט מקלדת חסין
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key && (key.name === 'q' || (key.ctrl && key.name === 'c'))) process.exit();
    
    // בדיקה לפי השם או לפי האות הגולמית (בשביל עברית/אנגלית)
    const input = (key && key.name) || str;
    const moves = { 
        w: [-1, 0], s: [1, 0], a: [0, -1], d: [0, 1],
        "'" : [-1, 0], 'ד': [1, 0], 'ש': [0, -1], 'ג': [0, 1] // מיפוי מקלדת עברית
    };

    if (moves[input]) {
        handleMove(...moves[input]);
    }
});

render("Welcome, Treasure Hunter!");