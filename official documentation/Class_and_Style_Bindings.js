const klsstylbind= new Vue({
    el: '#klsstylbind',
    data:{
        table: true,
        th: true,
        background: null,
        color: 'red',
        styleObject: {
            color: 'white',
            fontSize: '45px'
          }
        
    },
    computed: {
        cssObj: function(){
            return {
                table: this.table && this.background
            }
        }
    },
})

const condition= new Vue({
    el: '#condition',
    data:{
        win: 'i',
        big: true,
        address: false,
        loginType: 'username'
    },
    computed: {

    },
    methods: {
        changeType: function(){
            if (this.loginType === 'username'){
            this.loginType= 'null'
        }
        
        else{
        this.loginType= 'username'
    }
        }
    },
})

