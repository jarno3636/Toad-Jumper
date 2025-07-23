import k from "../kaplay.js";

// Replace "player" with your frog sprite
const player = add([
  sprite("frog_blue"),    // Change to "frog_green" or "frog_red" for other skins
  pos(120, 100),
  area(),
  body(),
  origin("center"),
  "player"
]);

// Replace pad with your lily pad
function spawnPad(x, y) {
  return add([
    sprite("lily_pad"),
    pos(x, y),
    area(),
    solid(),
    "pad"
  ]);
}

// If you have collectibles (example: triangle)
function spawnCollectible(x, y, type) {
  let spriteName = "collectible_triangle";
  if (type === "swirl") spriteName = "collectible_swirl";
  if (type === "leaf") spriteName = "collectible_leaf";
  return add([
    sprite(spriteName),
    pos(x, y),
    area(),
    "collectible"
  ]);
}

// If you use a background image
add([
  sprite("background"),
  pos(0, 0),
  layer("bg"),
  "background"
]);

// ...the rest of your game logic here...
