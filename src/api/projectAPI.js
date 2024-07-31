import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
}

export const getProject = async (id) => {
    const response = await axios.get(`${API_URL}/projects/${id}`);
    return response.data;
}

export const createProject = async (project) => {
    const response = await axios.post(`${API_URL}/projects`, project);
    return response.data;
}

export const updateProject = async (id, project) => {
    const response = await axios.put(`${API_URL}/projects/${id}`, project);
    return response.data;
}

export const deleteProject = async (id) => {
    const response = await axios.delete(`${API_URL}/projects/${id}`);
    return response.data;
}