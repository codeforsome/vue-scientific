import Mock from 'mockjs'
Mock.mock('/api/login/verify','post',data=>{
    console.log(data)
    return{
        msg:'aaa',
        success:true,
        data:{
            username:111,
            password:222,
        }
    }
})

Mock.mock('/api/file/add','post',data=>{
    console.log(data)
    return{
        msg:'aaa',
        success:true,
        data:{
            username:111,
            password:222,
        }
    }
})


var reg=RegExp('/api/user/get*');
Mock.mock(reg,'get',data=>{
    console.log(data)
    return{
        username:111,
        password:222,
    }
})
