import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("darkTheme");
	}, [theme]);
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

