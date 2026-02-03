// Admin API calls for user management
import axios from './axios';
import { API } from './endpoints';
import Cookies from 'js-cookie';

// Get authentication token from cookie or localStorage
const getAuthToken = () => {
    if (typeof window !== 'undefined') {
        return (
            Cookies.get('auth-token') ||
            localStorage.getItem('auth-token') ||
            localStorage.getItem('token')
        );
    }
    return null;
};

// Get all users (Admin only)
export const getAllUsers = async () => {
    try {
        const token = getAuthToken();
        const response = await axios.get(API.ADMIN.USERS, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err: Error | any) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to fetch users";
        throw new Error(errorMessage);
    }
};

// Get user by ID (Admin only)
export const getUserById = async (id: string) => {
    try {
        const token = getAuthToken();
        const response = await axios.get(API.ADMIN.USER_BY_ID(id), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err: Error | any) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to fetch user";
        throw new Error(errorMessage);
    }
};

// Create user (Admin only)
export const createUser = async (userData: FormData) => {
    try {
        const token = getAuthToken();
        const response = await axios.post(API.ADMIN.USERS, userData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (err: Error | any) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to create user";
        throw new Error(errorMessage);
    }
};

// Update user (Admin only)
export const updateUser = async (id: string, userData: FormData) => {
    try {
        const token = getAuthToken();
        const response = await axios.put(API.ADMIN.USER_BY_ID(id), userData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (err: Error | any) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to update user";
        throw new Error(errorMessage);
    }
};

// Delete user (Admin only)
export const deleteUser = async (id: string) => {
    try {
        const token = getAuthToken();
        const response = await axios.delete(API.ADMIN.USER_BY_ID(id), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err: Error | any) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to delete user";
        throw new Error(errorMessage);
    }
};

// Update user profile (Authenticated user)
export const updateProfile = async (id: string, userData: FormData) => {
    try {
        const token = getAuthToken();
        const response = await axios.put(API.AUTH.UPDATE_PROFILE(id), userData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (err: Error | any) {
        const errorMessage = err.response?.data?.message || err.message || "Failed to update profile";
        throw new Error(errorMessage);
    }
};
