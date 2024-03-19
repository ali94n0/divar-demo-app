import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import { getAllPostsApi } from "services/adsServise";

const usePostsList = () => {
	const { search } = useLocation();
	const queryStrings = Object.fromEntries(new URLSearchParams(search));
	console.log(queryStrings, "search");
	const { isLoading, data } = useQuery({
		queryKey: ["all-posts", queryStrings],
		queryFn: () => getAllPostsApi(search),
	});

	const { posts } = data || {};
	return { isLoading, posts };
};

export default usePostsList;
