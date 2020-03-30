// global filter
Vue.filter('upper', str => str.toUpperCase())

const filter= new Vue({
    el:'#filter',
    data:{
        name:'Ariful islam juwel',
        profession:'student',
        today: new Date(),
    },
    filters:{
        upperCaseName: any => any.toUpperCase(),
        bdFormat: today => today.getDate()+'-'+ (today.getMonth()+1)
    }

})