import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCategoryApi } from "src/services/adminService";

const useRemoveCategory = () => {
	const queryClient = useQueryClient();
	const { isPending: isDeleting, mutate: deleting } = useMutation({
		mutationFn: deleteCategoryApi,
		onSuccess: (res) => {
			toast.success("دسته بندی با موفقیت حذف شد");
			queryClient.invalidateQueries({ queryKey: ["categories"] });
		},
		onError: (error) => {
			toast.error(error?.response?.data?.message);
		},
	});

	return { isDeleting, deleting };
};

export default useRemoveCategory;
