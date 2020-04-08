const app1= new Vue({
    el:'#app-1',
    data: {
        message: 'Hello World'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString('bn-BD')
    }
  })