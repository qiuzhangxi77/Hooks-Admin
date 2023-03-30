import * as types from "@/redux/mutation-types";

// * setBreadcrumbList
export const setBreadcrumbList = (breadcrumbList: { [propName: string]: any }) => {
	console.log("store.breadcrumb.setBreadcrumbList: ", setBreadcrumbList);
	return {
		type: types.SET_BREADCRUMB_LIST,
		breadcrumbList
	};
};
