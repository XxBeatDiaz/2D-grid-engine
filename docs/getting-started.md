# 🏁 Getting Started

Build your first grid world in a few minutes. You’ll get a working state model you can render anywhere.

{% stepper %}
{% step %}
### Install

```bash
npm install @beatdiaz/2d-grid-engine
```
{% endstep %}

{% step %}
### Create your first script

This script creates a grid, registers a tile, and writes one cell.

{% code title="index.mjs" %}
```js
import { createGridEngine } from '@beatdiaz/2d-grid-engine';

const { grid, tiles } = createGridEngine(5, 5);

tiles.register('WALL', { walkPassable: false });

grid.addLayer('base', null);
grid.setCell('base', { row: 2, col: 2 }, 'WALL');

console.log('Cell (2,2) is:', grid.getCellValue('base', { row: 2, col: 2 }));
```
{% endcode %}
{% endstep %}

{% step %}
### Run it (ES Modules)

Pick one option.

{% tabs %}
{% tab title="Option A: package.json" %}
Add this to `package.json`:

```json
{
  "type": "module"
}
```

Run:

```bash
node index.js
```
{% endtab %}

{% tab title="Option B: .mjs" %}
Keep the file as `index.mjs`.

Run:

```bash
node index.mjs
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
If Node complains about ESM, upgrade Node. Use Node 18+.
{% endhint %}
{% endstep %}
{% endstepper %}

### Next steps

* Read the architecture in [Core Concepts](concepts.md).
* Start with movement and layers in [GridManager](api/gridmanager.md).

Now that you have your first grid running, you can:

* 💡 **Learn how the engine separates data from display**\
  Understand how blueprints define behavior while renderers stay completely decoupled.
* 📐 **Deep dive into layers and movement**\
  Explore managing multiple layers and handling entity movement across the grid.
* 👤 **Work with components**\
  Learn how to add, remove, and update components on your game objects dynamically.
