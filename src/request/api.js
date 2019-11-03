import http from './http';

export const sendLoginInfo=data=>http.post('/api/register/add',data);

export const loginVerify=data=>http.post('/api/login/verify',data);

//用户

export const getUserInfo=data=>http.get('/api/user/get',data);

export const getUserInfoById=(userId,params)=>http.get('/api/user/get/'+userId,params);

export const getUserInfoByHot=()=>http.get('/api/user/get/hot'); 

export const loginOut=data=>http.get('/api/login/out',data);

export const updateUserInfo=data=>http.post('/api/user/update',data);


// 论文
export const getThesisByParams=data=>http.get('/api/thesis/get',data);

export const getThesisByThesisId=(thesisId,params)=>http.get('/api/thesis/get/'+thesisId,params);

export const getThesisByUserId=(userId,params)=>http.get('/api/thesis/get/userid/'+userId,params);

export const getThesisByHot=()=>http.get('/api/thesis/get/hot');

export const addThesis=data=>http.post('/api/thesis/add',data);

export const updateThesis=data=>http.post('/api/thesis/update',data);

export const deleteThesis=data=>http.get('/api/thesis/delete',data);

export const collectThesis=data=>http.get('/api/thesis/collect',data);

export const cancelCollectThesis=data=>http.get('/api/thesis/cancel',data);

// 科研项目操作
export const addItem=data=>http.post('/api/item/add',data);

export const getItemByUserId=(userId,params)=>http.get('/api/item/get/userid/'+userId,params);

export const getItemByItemId=(itemId,params)=>http.get('/api/item/get/'+itemId,params);

export const updateItemApplyState=(data)=>http.post('/api/item/update/apply',data);

export const updateItemProfessor=(data)=>http.post('/api/item/update/professor',data);

 //获得最新发布的科研题目
export const getItemByNew=()=>http.get('/api/item/new');



