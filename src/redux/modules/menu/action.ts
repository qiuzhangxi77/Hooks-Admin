import * as types from "@/redux/mutation-types";
import { getMenuList } from "@/api/modules/login";
import { Dispatch } from "react";

// * updateCollapse
export const updateCollapse = (isCollapse: boolean) => {
	console.log("store.menu.updateCollapse: ", isCollapse);
	return {
		type: types.UPDATE_COLLAPSE,
		isCollapse
	};
};

// * setMenuList
export const setMenuList = (menuList: Menu.MenuOptions[]) => {
	console.log("store.menu.setMenuList: ", menuList);
	return {
		type: types.SET_MENU_LIST,
		menuList
	};
};

// ? 下面方法仅为测试使用，不参与任何功能开发
interface MenuProps {
	type: string;
	menuList: Menu.MenuOptions[];
}
// * redux-thunk
export const getMenuListActionThunk = () => {
	return async (dispatch: Dispatch<MenuProps>) => {
		const res = await getMenuList();
		console.log("store.menu.getMenuListActionThunk: ", res);
		dispatch({
			type: types.SET_MENU_LIST,
			menuList: (res.data as Menu.MenuOptions[]) ?? []
		});
	};
};

// * redux-promise《async/await》
export const getMenuListAction = async (): Promise<MenuProps> => {
	const res = await getMenuList();
	console.log("store.menu.getMenuListAction: ", res);
	return {
		type: types.SET_MENU_LIST,
		menuList: res.data ? res.data : []
	};
};

// * redux-promise《.then/.catch》
export const getMenuListActionPromise = (): Promise<MenuProps> => {
	return getMenuList().then(res => {
		console.log("store.menu.getMenuListActionPromise: ", res);
		return {
			type: types.SET_MENU_LIST,
			menuList: res.data ? res.data : []
		};
	});
};
