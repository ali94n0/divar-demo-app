import axios from "axios";
import { getCookie, setCookie } from "utils/cookie";
import { checkRefreshTokenApi } from "./authService";

const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const http = {
	get: api.get,
	post: api.post,
	patch: api.patch,
	put: api.put,
	delete: api.delete,
};

api.interceptors.request.use(
	(res) => {
		const accessToken = getCookie("accessToken");
		if (accessToken) {
			res.headers["Authorization"] = `Bearer ${accessToken}`;
		}
		return res;
	},
	(error) => Promise.reject(error),
);

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (
			originalRequest &&
			error.response.status === 401 &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true;
			const refreshToken = getCookie("refreshToken");
			try {
				if (refreshToken) {
					const tokens = await checkRefreshTokenApi({ refreshToken });

					setCookie(tokens);
					return api(originalRequest);
				}
			} catch (error) {
				return Promise.reject(error);
			}
		}
		return Promise.reject(error);
	},
);
