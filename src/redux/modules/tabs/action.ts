import * as types from "@/redux/mutation-types";

// * setTabsList
export const setTabsList = (tabsList: Menu.MenuOptions[]) => {
	console.log("store.tabs.setTabsList: ", tabsList);
	return {
		type: types.SET_TABS_LIST,
		tabsList
	};
};

// * setTabsActive
export const setTabsActive = (tabsActive: string) => {
	console.log("store.tabs.setTabsActive: ", tabsActive);
	return {
		type: types.SET_TABS_ACTIVE,
		tabsActive
	};
};
