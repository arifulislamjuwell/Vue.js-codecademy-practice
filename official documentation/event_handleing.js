const event = new Vue({
    el: '#event',
    methods: {
        warn: function (a,event) {
            // now we have access to the native event
            if (event) {
                
            }
            alert(a)
        }
    }

  })