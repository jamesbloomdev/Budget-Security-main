/** @type {import('tailwindcss').Config} */
// import themer from "@tailus/themer"; // if i delete this i got an error
import { palettes, rounded, shade } from "@tailus/themer"
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "class",
    safelist: ["isToggled"],
    theme: {
        fontFamily: {
            sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
            mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: ({ colors }) => ({
                primary : colors.blue,
                danger : colors.rose,
                warning : colors.yellow,
                success : colors.lime,
                info : colors.blue,
                gray : colors.zinc,
            }),
        }
        
    },
    plugins: [
        rounded
    ],
};
