Vue.component('todo',{
    template:`
    <li>
      {{ title }}
      <button @click="addevent">Remove</button>
    </li>
    `,
    props:['title'],

    methods:{
        addevent: function(){
            this.$emit('remove',)
        }
    }
})

const v_for = new Vue({
    el:'#v_for',
    data:{
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addTodo: function(){
        this.todos.push(
            {
                id: this.nextTodoId++,
                title:this.newTodoText
            }
        )
        this.newTodoText=''
    },
    remove: function(index){
        this.todos.splice(index, 1)
    }
  },

 
})