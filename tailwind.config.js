/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                header: "#F7F2F0",
                white: {
                    100: "rgba(255, 255, 255, 0.2)",
                    400: "#fff"
                },
                black: {
                    text: "#1C1C1C"
                },
                primary: {
                    100: "rgba(232, 134, 52, 0.2)",
                    400: "#E88634"
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            keyframes: {
                fade: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                }
            },
            animation: {
                fade: "fade 500ms ease"
            }
        }
    },
    plugins: []
};
