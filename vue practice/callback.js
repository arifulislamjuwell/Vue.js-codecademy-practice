const jsoN = {
    name: 'juwel',
    web: 'juwel.com',
    skill:['python','js','vue','django'],
    friends:[
        {name: 'diganta', web:'diganta.com'},
        {name: 'anik', web:'anik.com'}
    ]
}
console.log(jsoN.friends[1].web)
console.log('up')
print('middle', third)

function third(){
    console.log('down')
}
function print(val, callback){
    setTimeout(function(){
        console.log(val)
        callback()
    }, 2000)
}


const app = new Vue({
    el: "#app",
    data:{
        name: 'juwel',
        web:{
            link1:{
                name:'facebook', title:"go to facebook", url:'https://www.facebook.com'
            },
            link2:{
                name:'youtube', title:"go to youtube", url: 'www.youtube.com'
            }
        },
        activelinks: 'link1'
    },
    mounted: function(){
        console.log('vue done')
    }
})
console.log(app)