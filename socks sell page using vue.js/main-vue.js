Vue.component('product', {
    props:['premium'],
    template: `
    <div class="product">
    <div class="product-image">
        <img :src="image">
    </div>
    <div class="product-info">
        <h1 @mouseover="changeFont()">{{ title }}</h1>
        <p v-if="isStock> 10">In stock</p>
        <p v-else-if="isStock <= 10 && isStock > 0">Almost sold out</p>
        <p v-else>out of stock</p>
        <p> Shipping: {{ shippingCharge }}</p>
        <hr>
        <p  v-if="isStock" >In stock</p>
        <p v-else :class="{outOfStock : !isStock, fontBig: increaseFont}" :style="{color: css.color}">out of stock</p>

        <ul>
            <li v-for="detail in details">
                {{ detail }}
            </li>
        </ul>

        <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId"
            :style="{ background: variant.variantColor}" @mouseover="changeColor(index)">
        </div>

        <button @click="addCount" 
        :class="{disabledButton: !isStock}"
        :disabled="!isStock">Add to Cart</button>
    </div>
</div>
    `,
    data(){
        return{
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            inventory: 10,
            details: ['80% cotton', '20% polyester', 'gender-natural'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: 'socks-green.jpg',
                    variantQuantity: 10,
                    onSale: true,
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: 'socks-blue.jpg',
                    variantQuantity: 0,
                    onSale: false,
                }
            ],
            css: {
                color: 'red',
    
            },
            increaseFont: false
        }
    },
    methods: {
        addCount() {
           this.$emit('add-to-cart' ,this.variants[this.selectedVariant].variantId )
        },
        changeColor(index) {
            this.selectedVariant = index
        },
        changeFont() {
            
            if (!this.variants[this.selectedVariant].variantQuantity) {
                this.increaseFont = true
            }
            else {
                this.increaseFont = false
            }
        }
    },
    computed: {
        title() {
            if (this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product
            }
            else {
                return 'Not For Sale'
            }
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        isStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shippingCharge(){
            if (this.premium){
                return 'free'
            }
            
            return '$2.25'
            
        }

    },


})


var app = new Vue({
    el: '#vue-app',
    data:{
        premium: false,
        cartCount: []
    },
    methods:{
        updateCount (id){
            this.cartCount.push(id)
        }
    }
})