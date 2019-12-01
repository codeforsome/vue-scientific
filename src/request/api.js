import http from './http';
//  get操作中 params 是对象 {paramsName:paramsValue}
export const sendLoginInfo=data=>http.post('/api/register/add',data);

export const loginVerify=data=>http.post('/api/login/verify',data);

//--------------------------用户操作---------------------

export const getUserInfo=data=>http.get('/api/user/get',data);

export const getUserInfoById=(userId,params)=>http.get('/api/user/get/'+userId,params);

export const getUserInfoByHot=()=>http.get('/api/user/get/hot'); 

export const loginOut=data=>http.get('/api/login/out',data);

export const updateUserInfo=data=>http.post('/api/user/update',data);


// -----------------------论文操作-------------------
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

// ----------------------科研项目操作-----------------------
export const addItem=data=>http.post('/api/item/add',data);

export const addItemApply=id=>http.get('/api/item/apply/add/'+id);

export const getItemByUserId=(userId,params)=>http.get('/api/item/get/userid/'+userId,params);

export const getItemByItemId=(itemId,params)=>http.get('/api/item/get/'+itemId,params);

export const updateItem=data=>http.post('/api/item/update',data);

export const getItemApplyByItemId=(itemId,params)=>http.get('/api/item/apply/get/'+itemId,params);


export const getItemApplyStatusByItemId=(itemId)=>http.get('/api/item/apply/status/get/'+itemId);


export const getItemCount=()=>http.get('/api/item/get/count');




export const updateItemCheckState=(data)=>http.post('/api/item/update/check',data);

//----------------------科研人员的操作-----------------------------

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

//-----------------------管理员操作-------------------------


export const getAllUserInfo=(params)=>http.get('/api/admin/user/get',params);

export const getUserCount=()=>http.get('/api/admin/user/get/count');

export const getAllItem=(params)=>http.get('/api/admin/item/get/all',params);

export const getAllThesis=(params)=>http.get('/api/admin/thesis/get/all',params);


export const updataUserLoginStatus=(data)=>http.post('/api/admin/user/updata/status',data);

export const updataUserType=(data)=>http.post('/api/admin/user/updata/type',data);

export const resetUserPassword=(username)=>http.get('/api/admin/user/updata/password',username);

export const searchUser=(params)=>http.get('/api/user/search',params);
export const searchItem=(params)=>http.get('/api/item/search',params);
export const searchThesis=(params)=>http.get('/api/thesis/search',params);

export const deleteUserById=(id)=>http.get('/api/admin/user/delete',id);

export const deleteItemById=(id)=>http.get('/api/admin/item/delete',id);

export const userDeleteItemById=(id)=>http.get('/api/item/delete',id);

export const deleteThesisById=(id)=>http.get('/api/admin/thesis/delete',id);

export const userDeleteThesisById=(id)=>http.get('/api/thesis/delete',id);









