import * as types from "@/redux/mutation-types";

// * setAuthButtons
export const setAuthButtons = (authButtons: { [propName: string]: any }) => {
	console.log("store.auth.setAuthButtons: ", authButtons);
	return {
		type: types.SET_AUTH_BUTTONS,
		authButtons
	};
};

// * setAuthRouter
export const setAuthRouter = (authRouter: string[]) => {
	console.log("store.auth.setAuthRouter: ", authRouter);
	return {
		type: types.SET_AUTH_ROUTER,
		authRouter
	};
};
