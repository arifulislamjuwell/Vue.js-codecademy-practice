
const computed_properties = new Vue({
    el: "#computed",
    data:{
        payments:[
            {name:'Gas', amount:2358, paid: true},
            {name:'electricity', amount:562, paid: true},
            {name:'water', amount:235, paid: false},
            {name:'houserent', amount:11400, paid: true},
        ],
    },
    computed:{
        unpaidPayments: function(){
            return this.payments.filter(function(payment){
                return !payment.paid 
            })
        },
        allAmount: function(){
            let sum =0
            for(var i=0; i<this.payments.length; i++){
                sum+= this.payments[i].amount
            }
            return sum
        }
    }
})
