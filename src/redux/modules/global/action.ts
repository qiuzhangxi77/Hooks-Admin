import * as types from "@/redux/mutation-types";
import { ThemeConfigProp } from "@/redux/interface/index";

// * setToken
export const setToken = (token: string) => {
	console.log("store.global.setToken: ", token);
	return {
		type: types.SET_TOKEN,
		token
	};
};

// * setAssemblySize
export const setAssemblySize = (assemblySize: string) => {
	console.log("store.global.setAssemblySize: ", assemblySize);
	return {
		type: types.SET_ASSEMBLY_SIZE,
		assemblySize
	};
};

// * setLanguage
export const setLanguage = (language: string) => {
	console.log("store.global.setLanguage: ", language);
	return {
		type: types.SET_LANGUAGE,
		language
	};
};

// * setThemeConfig
export const setThemeConfig = (themeConfig: ThemeConfigProp) => {
	console.log("store.global.setThemeConfig: ", themeConfig);
	return {
		type: types.SET_THEME_CONFIG,
		themeConfig
	};
};
