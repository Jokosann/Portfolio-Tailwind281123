/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["index.html"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			keyframes: {
				navFade: {
					from: {
						opacity: "0",
						transform: "translateX(50px)",
					},
					to: {
						opacity: "1",
						transform: "translateX(0px)",
					},
				},
				navFadeLg: {
					from: {
						opacity: "0",
						transform: "translateX(10px)",
					},
					to: {
						opacity: "1",
						transform: "translateX(0px)",
					},
				},
			},
			animation: {
				navFadeLg: "navFadeLg 300ms forwards running",
			},
			colors: {
				primary: "#6366f1",
				secondary: "#64748b",
				dark: "#0f172a",
			},
			screens: {
				"2xl": "1320px",
			},
		},
	},
	plugins: [],
};
