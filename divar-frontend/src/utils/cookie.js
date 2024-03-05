import { array } from "yup";

export const setCookie = (tokens) => {
	document.cookie = `accessToken=${tokens.accessToken}; Max-Age=${
		24 * 60 * 60
	}`;
	document.cookie = `refreshToken=${tokens.refreshToken}; Max-Age=${
		30 * 24 * 60 * 60
	}`;
};

export const getCookie = (tokenName) => {
	const token = document.cookie
		.split(";")
		.find((string) => string.trim().split("=")[0] === tokenName)
		?.split("=")[1];
	return token;
};
