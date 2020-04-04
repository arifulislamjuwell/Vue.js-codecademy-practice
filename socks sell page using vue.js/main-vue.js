var app= new Vue({
    el:'#vue-app',
    data:{
        product:'Socks',
        image:'socks-green.jpg',
        inventory: 10,
        isStock: false,
        details:['80% cotton','20% polyester','gender-natural'],
        variants:[
            {
                variantId:2234,
                variantColor:'green',
                variantImage:'socks-green.jpg'
            },
            {
                variantId:2235,
                variantColor:'blue',
                variantImage:'socks-blue.jpg'
            }
        ],
        cartCount:0,
        css:{
            color: 'red',

        }
    },
    methods: {
        addCount: function(){
            this.cartCount+= 1
        },
        changeColor:function(image){
            this.image= image
        }
    },
    created() {
        
    },  

})