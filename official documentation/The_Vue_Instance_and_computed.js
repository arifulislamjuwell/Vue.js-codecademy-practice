var obj = {
   foo: false,
   facebook: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
   first: ' juwel',
   last: 'shikder',
   full_name: ''
}



var vm = new Vue({
   el: "#instance",
   data: obj,
   computed: {
      reversedMessage: function () {
         return Date.now()
      },
      fullName: {
         get: function () {
            return this.first + ' ' + this.last
         },
         set: function (val) {
            var names = val.split(' ')
            this.first = names[0]
            this.last = names[names.length - 1]
         }
      }
   },
   methods: {
      changeIt() {
         this.fullName = this.full_name
      }
   },
})

var vm1 = new Vue({
   el: '#computed_props',
   data: {
      kilometers: 0,
      meters: 0
   },
   watch: {
      kilometers: function (val) {
         this.kilometers = val;
         this.meters = val * 1000;
      },
      meters: function (val) {
         this.kilometers = val / 1000;
         this.meters = val;
      }
   }
});

var watchExampleVM = new Vue({
   el: '#watch-example',
   data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
   },
   watch: {
      question: function () {
         this.answer = 'Waiting for you to stop typing...'
         this.debounce()
      }
   },
   created() {
      this.debounce = _.debounce(this.getAnswer, 700)
   },
   methods: {
      getAnswer: function () {
         if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
         }
         var vm = this
         this.answer = 'Thinking...'
         axios.get('https://yesno.wtf/api')
            .then(function (response) {
               vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
               vm.answer = 'Error! Could not reach the API. ' + error

            })
      }
   }
});