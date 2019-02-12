class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.cell').on('click', e => {
      const $cell = $(e.currentTarget);
      this.makeMove($cell);
    })
  }

  makeMove($square) {
    const pos = $.data($square[0], "pos").pos;
    const current_mark = this.game.currentPlayer;
    let filled = false;
    try {
      this.game.playMove(pos);
    }
    catch(err){
      console.log(err);
      alert(err.msg);
      filled = true;
    }
    if (!filled){
      $square.removeClass('unclicked');
      $square.addClass(`${current_mark} clicked`);
      const $span = $('<span>')
      $square.append($span);
      $span.addClass('mark')
      $span.text(current_mark)
    }
        if (this.game.winner()){
          const winner = this.game.winner()
          $('.cell').addClass('lost')
          $(`.${winner}`).addClass("won")
          // $(`.${winner}`).removeClass("lost")
          // console.log(this.game.winner());
          setTimeout(function(){
            alert(`${winner} wins!`)
          }, 49);
        } else if (this.game.isOver()){
          $('.cell').addClass('lost')
          setTimeout(function () {
            alert(`Its a Draw :/`)
          }, 49);
        }
  }

  setupBoard() {
    const $board = $('<div>');
    $board.addClass('board');
    this.$el.append($board);
    $board.append('<ul>');
    for (let i = 0; i < 9; i++) {
      let $cell = $('<li>');
      $cell.attr('id', `cell-${i}`);
      $cell.addClass('cell');
      $cell.addClass('unclicked');
      $.data($cell[0], "pos", {
        pos: [(i%3), Math.floor(i/ 3)]
      })
      $('.board ul').append($cell);
    }

  }
}

module.exports = View;
