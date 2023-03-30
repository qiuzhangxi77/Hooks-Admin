import defaultTheme from "@/styles/theme/theme-default.less";
import darkTheme from "@/styles/theme/theme-dark.less";
// import defaultTheme from "@/styles/theme/theme-default.less";
// import darkTheme from "@/styles/theme/theme-dark.less";
// 注意import ... 和 import {} from 的区别
// 在样式上，import是会直接导入并解析到style，而import {} from是不会导入到style中（因此后者是不会有样式覆盖的问题）
// 在代码上，一般不会import ..ts 而是一般会import {} from ..ts 的接口，但注意即使有些执行代码不在export的接口里也会执行
import { ThemeConfigProp } from "@/redux/interface";

/**
 * @description 全局主题设置
 * */
const useTheme = (themeConfig: ThemeConfigProp) => {
	const { weakOrGray, isDark } = themeConfig;
	const initTheme = () => {
		// 灰色和弱色切换
		const body = document.documentElement as HTMLElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// 切换暗黑模式
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
