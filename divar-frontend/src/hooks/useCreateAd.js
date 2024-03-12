import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addPostApi } from "src/services/adsServise";

const useCreateAd = () => {
	const queryClient = useQueryClient();
	const { isPending: isCreatingPost, mutate: creatingPost } = useMutation({
		mutationFn: addPostApi,
		onSuccess: (res) => {
			toast.success("اگهی با موفقیت ایجاد شد");
			queryClient.invalidateQueries({
				queryKey: ["my-posts"],
			});
		},
		onError: (err) => {
			toast.error(err?.response?.data?.message);
		},
	});

	return { isCreatingPost, creatingPost };
};

export default useCreateAd;
