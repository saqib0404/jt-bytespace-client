import { cn } from "@/lib/utils";
import type {
    InputHTMLAttributes
} from "react";


interface InputProps
    extends InputHTMLAttributes<HTMLInputElement> { }


export default function Input({

    className,

    ...props

}: InputProps) {


    return (

        <input

            className={cn(

                "w-full",

                "rounded-xl",

                "border border-neutral-200",

                "px-5 py-4",

                "text-neutral-950",

                "placeholder:text-neutral-400",

                "outline-none",

                "transition",

                "focus:border-primary-600",

                className

            )}

            {...props}

        />

    );


}