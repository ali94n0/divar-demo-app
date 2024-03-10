import { http } from "services/httpServise";

export const getCategoriesApi = () => {
	return http.get("category").then((res) => res.data);
};

export const deleteCategoryApi = ({ id }) => {
	return http.delete(`category/${id}`).then((res) => console.log(res));
};

export const createCategoryApi = (data) => {
	return http.post("category", data).then((res) => res.data);
};
