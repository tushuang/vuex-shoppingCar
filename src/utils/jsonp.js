import jsonp from 'jsonp'


const _jsonp = ({url,params})=> {
    return new Promise( (resolve) => {
        jsonp(url,{
            param: 'jsoncallback'
        },(err, data) => {
            console.log(data, 111)
            resolve(data)
        })
    })
}
export default _jsonp