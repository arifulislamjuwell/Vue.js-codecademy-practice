var event = new Vue()

Vue.component('tabs',{
    template:`
    <div class="tab">
        <ul>
            <li @click="make(tab.name)" v-for="tab in tabList" :class="{'active' :tab.isSelect}">
                {{ tab.name }}
            </li>
        </ul>
        <div class="details">
            <slot></slot>
        </div>
    </div>

    `,
    data: function(){
        return {
            tabList:[]
        }
    },
    methods:{
        make: function(name){
            event.$emit('tableChange', name)
        }
    },
    created: function(){
       this.tabList= this.$children
    }

})

Vue.component('tab',{
    template:`
    <div v-if="isSelect">
        <slot></slot> 
    </div>
    `,
    data: function (){
        return {
            isSelect: false
        }
    },
    created: function(){
        var this_tab= this
        this.isSelect= this.selected

        event.$on('tableChange', function(name){
            if(this_tab.name == name){
                this_tab.isSelect= true
            }
            else {
                this_tab.isSelect= false
            }
        })

    },
    props:['name', 'selected']
})



const compo= new Vue({
    el:'#component',
    data:{

    },
    mounted: function(){
        console.log('vue done')
    }
})