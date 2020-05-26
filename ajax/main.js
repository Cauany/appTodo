// const minhaPromise = function(){
//     return new Promise(function(resolve, reject){
//         const xhr = new XMLHttpRequest()

//         xhr.open('GET', 'http://api.github.com/users/cauany')
//         xhr.send(null)
        
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText))
//                 }else{
//                     reject('Erro na requisição')
//                 }
//             }
//         }
//     })
// }

axios.get('http://api.github.com/users/cauany')
    .then(function(res) {
        console.log(res.data.avatar_url)
    })
    .catch(function(error) {
        console.warn(error)
    })