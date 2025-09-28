import axios from "axios";
import uRLs from "../utils/baseUtils";

const AxiosInstance = axios.create({
    baseURL: uRLs.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

let refreshPromise = null;

export const setupInterceptors = ({ handleGetToken, handleUpdateToken, handleLogout }) => {
    AxiosInstance.interceptors.request.use(
        async (config) => {
            try {
                const tokenData = handleGetToken();
                if (tokenData?.accessStoreToken) {
                    config.headers.Authorization = `Bearer ${tokenData.accessStoreToken}`;
                }
                return config;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        (error) => Promise.reject(error)
    );

    AxiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const tokenData = handleGetToken();
                    if (!tokenData?.refreshStoreToken) {
                        throw new Error("No refresh token available");
                    }
                    if (!refreshPromise) {
                        refreshPromise = refreshAccessToken(tokenData.refreshStoreToken, handleUpdateToken);
                    }
                    const newAccessToken = await refreshPromise;
                    refreshPromise = null;
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return AxiosInstance(originalRequest);
                } catch (refreshError) {
                    refreshPromise = null;
                    if (refreshError.response?.status === 401 || refreshError.response?.status === 403 ) {
                        handleLogout();
                    }
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );
};

const refreshAccessToken = async (refreshToken, handleUpdateToken) => {
    try {
        const response = await axios.get(`${uRLs.API_URL}create-token`, {
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            },
        });
        const newAccessToken = response.data.results.accessToken; 
        handleUpdateToken(newAccessToken);
        return newAccessToken;
    } catch (error) {
        throw error;
    }
};

export default AxiosInstance;