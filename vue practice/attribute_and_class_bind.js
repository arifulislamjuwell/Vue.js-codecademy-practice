
const app = new Vue({
    el: "#app",
    data:{
        name: 'juwel',
        web:{
            link1:{
                name:'facebook', title:"go to facebook", url:'https://www.facebook.com'
            },
            link2:{
                name:'youtube', title:"go to youtube", url: 'www.youtube.com'
            }
        },
        activelinks: 'link1',
        html:'<h1> html bind test  </h1>'
    },
    mounted: function(){
        console.log('vue done')
    }
})
