import axiosInstance from './axiosInstance';

// GET /api/blogs?category=EdTech&authorEmail=user@example.com
export const getAllBlogs = (category = '', authorEmail = '') => {
    const params = {};
    if (category) params.category = category;
    if (authorEmail) params.authorEmail = authorEmail;
    return axiosInstance.get('/blogs', { params });
};

// GET /api/blogs/:id
export const getBlogById = (id) => {
    return axiosInstance.get(`/blogs/${id}`);
};

// GET /api/blogs/categories
export const getCategories = () => {
    return axiosInstance.get('/blogs/categories');
};

// POST /api/blogs
export const createBlog = (data) => {
    return axiosInstance.post('/blogs', data);
};

// PUT /api/blogs/:id?authorEmail=user@example.com
export const updateBlog = (id, data, authorEmail) => {
    return axiosInstance.put(`/blogs/${id}`, data, {
        params: { authorEmail }
    });
};

// DELETE /api/blogs/:id?authorEmail=user@example.com
export const deleteBlog = (id, authorEmail) => {
    return axiosInstance.delete(`/blogs/${id}`, {
        params: { authorEmail }
    });
};
