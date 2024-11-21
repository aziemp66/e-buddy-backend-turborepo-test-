import axios from "axios";
import { store } from "../store/store"; // Import Redux store

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
	baseURL: API_URL,
});

// Add a request interceptor to include the token in every request
apiClient.interceptors.request.use((config) => {
	const token = store.getState().user.token; // Access token from Redux
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default apiClient;
