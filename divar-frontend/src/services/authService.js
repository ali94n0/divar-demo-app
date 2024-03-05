import { http } from "services/httpServise";

export const getOtpApi = (data) => {
	return http.post("auth/send-otp", data).then((res) => res.data);
};

export const checkOtpApi = (data) => {
	return http.post("auth/check-otp", data).then((res) => res.data);
};

export const checkRefreshTokenApi = (data) => {
	return http.post("auth/check-refresh-token", data).then((res) => res.data);
};
