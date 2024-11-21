import apiClient from "./apiClient";
import { User } from "@ebuddy/shared";


export const fetchUser = async (): Promise<User> => {
	const response = await apiClient.get(`/api/users`);
	return response.data;
};

export const createUser = async (user: User): Promise<void> => {
	await apiClient.post(`/api/users`, user);
};

export const updateUser = async (data: Partial<User>): Promise<User> => {
	const response = await apiClient.put(`/api/users`, data);
	return response.data
};

export const updatePassword = async (newPassword: string): Promise<void> => {
	await apiClient.put(`/api/users/password`, { newPassword });
};
