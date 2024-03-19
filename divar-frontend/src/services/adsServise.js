import axios from "axios";
import { getCookie } from "utils/cookie";
import { http } from "./httpServise";

export const addPostApi = (data) => {
	return axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, data, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${getCookie("accessToken")}`,
		},
	});
};

export const getMyPostApi = () => {
	return http.get("post/my").then((res) => res.data);
};

export const removePostApi = (id) => {
	return http.delete(`post/delete/${id}`).then((res) => res.data);
};

export const getAllPostsApi = (search = "") => {
	console.log(search, "service");
	return http.get(`${search}`).then((res) => res.data);
};
