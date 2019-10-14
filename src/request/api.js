import http from './http';

export const sendLoginInfo=data=>http.post('/api/register/add',data);

export const loginVerify=data=>http.post('/api/login/verify',data);

export const getUserInfo=data=>http.get('/api/user/get',data);