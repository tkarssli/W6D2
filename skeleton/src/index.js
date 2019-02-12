const View = require('./ttt-view') // require appropriate file
const Game = require('./game.js')// require appropriate file

  $(() => {
    // Your code here
    const rootEl = $('.ttt');
    const game = new Game();
    new View(game, rootEl);
  });
