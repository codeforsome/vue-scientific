import http from './http';

export const sendLoginInfo=data=>http.post('/api/register/add',data);

export const loginVerify=data=>http.post('/api/login/verify',data);

export const getUserInfo=data=>http.get('/api/user/get',data);

export const getUserInfoByHot=()=>http.get('/api/user/get?hot');

export const loginOut=data=>http.get('/api/login/out',data);

export const updateUserInfo=data=>http.post('/api/user/update',data);

export const getThesisByUsername=data=>http.get('/api/thesis/get',data);