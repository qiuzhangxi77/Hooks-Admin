import * as types from "@/redux/mutation-types";

// * setBreadcrumbList
export const setBreadcrumbList = (breadcrumbList: { [propName: string]: any }) => {
	console.log("store.breadcrumb.setBreadcrumbList: ", breadcrumbList);
	return {
		type: types.SET_BREADCRUMB_LIST,
		breadcrumbList
	};
};
