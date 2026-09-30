import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const satoshi = localFont({
    src: [
        {
            path: "../../public/fonts/Satoshi-Variable.ttf",
            style: "normal",
        },
        {
            path: "../../public/fonts/Satoshi-VariableItalic.ttf",
            style: "italic",
        },
    ],
    variable: "--font-satoshi",
});

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: [
        "400",
        "500",
        "600",
        "700",
        "800",
    ],
});