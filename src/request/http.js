import axios from 'axios';
axios.defaults.timeout = 5000;
export default {
    // params:{
    //     id:'接口配置参数（相当于url?id=xxxx）'
    //   },
    get:function(url='',params={}){
        return new Promise(function(resolve,reject){
            axios.get(url,{
                params:params,
              }).then(function(res){
               resolve(res);
              }).catch(function(error){
               reject(error);
              })
        })
      
    },
    post: function (url = '', data = {}, headers = 'application/json;charset=UTF-8') {
        return new Promise(function (resolve, reject) {
            axios.post(url, data, {
                headers: {
                    'Content-Type': headers
                }
            }).then(function (res) {
                resolve(res);
            }).catch(function (error) {
                reject(error)//错误处理 相当于error
            })
        })
    }
}