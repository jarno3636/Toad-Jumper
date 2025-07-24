// Tell us it’s loaded:
console.log("main.js running");

// Import Kaboom wrapper
import k from './game/kaplay.js';

// Load your assets and scenes
import './game/assets.js';
import './game/scenes/start.js';
import './game/scenes/game.js';
import './game/scenes/over.js';

// Kick off the start scene
k.go('start');
