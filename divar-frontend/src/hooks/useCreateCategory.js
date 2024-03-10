import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { createCategoryApi } from "src/services/adminService";

const useCreateCategory = () => {
	const queryClient = useQueryClient();
	const { isPending: isCreating, mutate: creating } = useMutation({
		mutationFn: createCategoryApi,
		onSuccess: (res) => {
			toast.success("دسته‌بندی با موفقیت ثبت شد");
			queryClient.invalidateQueries({ queryKey: ["categories"] });
		},
		onError: (error) => {
			toast.error(error?.response?.data?.message);
		},
	});
	return { isCreating, creating };
};

export default useCreateCategory;
