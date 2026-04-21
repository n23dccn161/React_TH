import axiosInstance from './axiosInstance';

// POST /api/auth/register
export const register = (data) => {
    return axiosInstance.post('/auth/register', data);
};

// POST /api/auth/login
export const login = (data) => {
    return axiosInstance.post('/auth/login', data);
};

// POST /api/auth/logout
export const logout = () => {
    return axiosInstance.post('/auth/logout');
};