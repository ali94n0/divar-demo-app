import { http } from "services/httpServise";
import { getCookie } from "src/utils/cookie";

export const getUserApi = () => {
	return http.get("user/whoami").then((res) => res.data);
};
