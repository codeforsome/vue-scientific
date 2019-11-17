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

export const getThesisByHot=(params)=>http.get('/api/thesis/get/hot',params);

export const getThesisCount=()=>http.get('/api/thesis/get/count');

export const addThesis=data=>http.post('/api/thesis/add',data);

export const updateThesis=data=>http.post('/api/thesis/update',data);

export const deleteThesis=data=>http.get('/api/thesis/delete',data);

export const collectThesis=data=>http.get('/api/thesis/collect',data);

export const cancelCollectThesis=data=>http.get('/api/thesis/cancel',data);

// 科研项目操作
export const addItem=data=>http.post('/api/item/add',data);

export const addItemApply=id=>http.get('/api/item/apply/add/'+id);

export const getItemByUserId=(userId,params)=>http.get('/api/item/get/userid/'+userId,params);

export const getItemByItemId=(itemId,params)=>http.get('/api/item/get/'+itemId,params);

export const updateItem=data=>http.post('/api/item/update',data);

export const getItemApplyByItemId=(itemId,params)=>http.get('/api/item/apply/get/'+itemId,params);


export const getItemApplyStatusByItemId=(itemId)=>http.get('/api/item/apply/status/get/'+itemId);


export const getItemCount=()=>http.get('/api/item/get/count');




export const updateItemCheckState=(data)=>http.post('/api/item/update/check',data);

//科研人员的操作

//指定项目的专家
export const updateItemProfessor=(data)=>http.post('/api/item/scientific/update/professor',data);

export const updateItemApplyState=(data)=>http.post('/api/item/scientific/update/apply',data);


 //获得最新发布的科研题目
export const getItemByNew=(params)=>http.get('/api/item/new',params);

export const getAllProfessor=()=>http.get('/api/user/professor/get/all');

//专家对科研项目的操作

export const getProfessorItem=()=>http.get('/api/item/professor/get');

//确定老师上传的资料是否符合该科研题目的要求
export const updateItemProfessorCheck=(data)=>http.post('/api/item/professor/update/check',data);







