Vue.component('button-cnt',{
    data: function (){
        return {
            count: 0
        }
    },
    template:`
    <button @click="count++">You clicked me {{ count }} times.</button>
    `
})


Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
    `
  })

  Vue.component('custom-ch', {
    props: ['value'],
    template: `
      <input type="checkbox"
        :value= 1
        @click="$emit('input', $event.target.value)"
      >
    `
  })

Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div>
        <h3>
            {{ post.title }}
        </h3>       
        <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
        <div> 
            {{  post.date  }}
        </div>
        <slot></slot>
        <custom-input v-model="searchText"> </custom-input> {{ searchText }}
        <custom-ch v-model="checked"> </custom-ch> {{ checked }}
    </div>
    `,
    data: function(){
        return {
            searchText:'asfgasfasgf',
            checked:''
        }
    },
    mounted() {
        console.log(this.searchText)
    },

  })



  const comp= new Vue({
    el:"#com",
    data: {
        posts: [
          { id: 1, title: 'My journey with Vue',date:'2-09-2020' },
          { id: 2, title: 'Blogging with Vue', date:'2-09-2020'  },
          { id: 3, title: 'Why Vue is so fun', date:'2-09-2020'  }
        ],
        postFontSize:1,

      },
      methods: {   
        increase: function(length){
            this.postFontSize+= length
        }
      },
})
