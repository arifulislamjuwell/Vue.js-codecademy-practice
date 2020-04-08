Vue.component('todo-item', {
    template: '<li>{{ todo.text }}</li>',
    props:['todo']
  })
  
  var app = new Vue({
      el:'#root',
      data:{
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
          ]
      }
  })