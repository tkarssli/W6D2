class HanoiView {
  constructor(game, rootEl){
    this.game = game;
    this.$el = rootEl;
    this.setUpTowers();
    this.setBinds();
    this.render();

  }

  render(){
    const $disc1 = $('<div>')
    $disc1.addClass('disc disc-1')
    const $disc2 = $('<div>')
    $disc2.addClass('disc disc-2')
    const $disc3 = $('<div>')
    $disc3.addClass('disc disc-3')
    const towers = this.game.towers
    $('ul').each(function (index1, element) {
     $(element).children('li').each(function (index2, element2) {
        if(towers[index1][index2]){
          switch (towers[index1][index2]) {
            case 1:
            console.log($disc1)
              $(element2).append($disc1);
              break;
            case 2:
              $(element2).append($disc2);
              break;
            case 3:
              $(element2).append($disc3);
              break;
          }
        }
    })
  })
}

  setBinds(){

  }

  setUpTowers(){
    for (let i = 0; i < 3; i++) {
      const $ul = $('<ul>')
      $ul.addClass('stack')
      const $li = $('<li>')
      $li.addClass('level')
      const $pole = $('<div>')
      $pole.addClass('pole')

      $ul.append($li)   
      $ul.append($li.clone())   
      $ul.append($li.clone()) 
      $ul.append($pole) 
      $ul.append($pole.clone()) 
      
      this.$el.append($ul)
    }
  }
}

module.exports = HanoiView;