import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const paths = [
	"src",
	"assets",
	"styles",
	"components",
	"services",
	"router",
	"pages",
	"utils",
	"hooks",
];
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			...paths.reduce(
				(acc, cur) => ({
					...acc,
					[cur]: `/${cur === "src" ? "src" : "src/" + cur}`,
				}),
				"",
			),
		},
	},
});
