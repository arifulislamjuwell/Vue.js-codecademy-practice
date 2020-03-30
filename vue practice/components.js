Vue.component('panel', {
    template:`
    <div class="panel" v-if="show">
        <div class=" panelTitle">
            <button @click="show= false" >X</button>
            <h1> {{ title }}</h1>
        </div>

        <div class="panelBody">
           {{ body }}
        </div>
     <slot></slot>
    </div>
    `,
    props:['title', 'body'],
    data: function(){
        return {
            show: true
        }
    }
})

const component= new Vue({
    el:'#component',
    data:{

    }
})