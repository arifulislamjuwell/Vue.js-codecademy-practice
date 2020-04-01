Vue.component('panel', {
    template: `
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
    props: ['title', 'body'],
    data: function () {
        return {
            show: true
        }
    }
})

Vue.component('modal', {
    template: `
<div class="">
    <div clasmodals="modalContent">
        <div class="modalHeader">
            <slot name="header"></slot>
        </div>
        <div class="modalBody"></div>
            <slot name="body"></slot>
        <div class="modalFooter">
            <button @click="$emit('onsave')">save</button>
            <button>cancle</button>
        </div>
    </div>
</div>
    `
})

const component = new Vue({
    el: '#component',
    data: {
        isLogin :false
    }
})