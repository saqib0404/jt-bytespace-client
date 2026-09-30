import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";


interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    variant?:
    | "primary"
    | "secondary"
    | "outline";

    size?:
    | "sm"
    | "md"
    | "lg";

}


export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {


    return (

        <button

            className={cn(

                "rounded-full font-medium transition-all duration-300",

                "focus:outline-none focus:ring-2 focus:ring-primary-600",

                {
                    "bg-primary-600 text-white hover:bg-primary-700":
                        variant === "primary",


                    "bg-secondary-400 text-neutral-950 hover:bg-secondary-300":
                        variant === "secondary",


                    "border border-neutral-200 text-neutral-950 hover:bg-neutral-50":
                        variant === "outline",

                },


                {

                    "px-4 py-2 text-sm":
                        size === "sm",

                    "px-6 py-3 text-base":
                        size === "md",

                    "px-8 py-4 text-lg":
                        size === "lg",

                },


                className

            )}

            {...props}

        >

            {children}

        </button>

    );
}