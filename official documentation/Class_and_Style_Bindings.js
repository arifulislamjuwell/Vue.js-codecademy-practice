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