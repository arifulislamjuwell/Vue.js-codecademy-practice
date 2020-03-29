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

