import axios from "axios";

const API_URL = "";

export const getBlogs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createBlogs = async (title : string , content : string) => {
    const response = await axios.post(API_URL,{ title , content });
    return response.data;
};

export const updateBlog = async (id : string , title : string , content : string) => {
    const response = await axios.put(`${API_URL}/${id}`,{ title , content });
    return response.data;
};

export const deleteBlog = async (id : string) => {
    await axios.delete(`${API_URL}/${id}`);
};