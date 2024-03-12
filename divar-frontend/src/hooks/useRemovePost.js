import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { removePostApi } from "services/adsServise";

const useRemovePost = () => {
	const queryClient = useQueryClient();
	const { isPending: isDeleting, mutate: deleting } = useMutation({
		mutationFn: removePostApi,
		onSuccess: (res) => {
			toast.success("اگهی با موفقیت حذف شد");
			queryClient.invalidateQueries({ queryKey: ["my-posts"] });
		},
		onError: (err) => {
			toast.error(err?.response?.data?.message);
		},
	});

	return { isDeleting, deleting };
};

export default useRemovePost;
