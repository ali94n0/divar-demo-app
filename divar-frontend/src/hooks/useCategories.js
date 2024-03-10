import { useQuery } from "@tanstack/react-query";

import { getCategoriesApi } from "services/adminService";

const useCategories = () => {
	const { isLoading, data, error } = useQuery({
		queryKey: ["categories"],
		queryFn: getCategoriesApi,
	});
	const categories = data || {};
	return { isLoading, categories, error };
};

export default useCategories;
