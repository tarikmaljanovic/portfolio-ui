import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const login = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, loginData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}