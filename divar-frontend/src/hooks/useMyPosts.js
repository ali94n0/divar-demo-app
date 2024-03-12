import { useQuery } from "@tanstack/react-query";
import { getMyPostApi } from "src/services/adsServise";

const useMyPosts = () => {
	const { isLoading, data, error } = useQuery({
		queryKey: ["my-posts"],
		queryFn: getMyPostApi,
	});
	const { posts } = data || {};
	return { isLoading, posts, error };
};

export default useMyPosts;
