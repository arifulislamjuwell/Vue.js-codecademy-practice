const method_app= new Vue({
    el:'#api_test',
    data:{
        posts:[]
    },
    methods:{
        callApi:function(){
           var this_cur= this
           axios.get('http://dummy.restapiexample.com/api/v1/employees').then(function(res){
            this_cur.posts= res.data.data
           })
    }
}
})
