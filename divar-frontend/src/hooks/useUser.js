import { useQuery } from "@tanstack/react-query";

import { getUserApi } from "services/userService";

const useUser = () => {
	const { isLoading, data, error } = useQuery({
		queryKey: ["user"],
		queryFn: getUserApi,
	});
	const user = data || {};
	return { isLoading, user, error };
};

export default useUser;
