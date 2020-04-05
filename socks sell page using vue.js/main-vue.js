var app= new Vue({
    el:'#vue-app',
    data:{
        brand:'Vue Mastery',
        product:'Socks',
        selectedVariant:0,
        inventory: 10,
        details:['80% cotton','20% polyester','gender-natural'],
        variants:[
            {
                variantId:2234,
                variantColor:'green',
                variantImage:'socks-green.jpg',
                variantQuantity:10,
                onSale:true,
            },
            {
                variantId:2235,
                variantColor:'blue',
                variantImage:'socks-blue.jpg',
                variantQuantity:0,
                onSale:false,
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
        changeColor:function(index){
            this.selectedVariant= index
        }
    },
    computed: {
        title(){
            if(this.variants[this.selectedVariant].onSale){
                return this.brand +' '+ this.product
            }
            else{
                return 'Not For Sale'
            }
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        isStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }

    },

})