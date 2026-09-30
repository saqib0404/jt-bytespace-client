import { cn } from "@/lib/utils";
import type { ReactNode } from "react";


interface BadgeProps {

    children: ReactNode;

    variant?:
    "lime"
    | "blue";

}


export default function Badge({

    children,

    variant = "lime",

}: BadgeProps) {


    return (

        <span

            className={cn(

                "inline-flex items-center rounded-full",

                "px-4 py-2 text-sm font-medium",

                {

                    "bg-secondary-400 text-neutral-950":
                        variant === "lime",


                    "bg-primary-50 text-primary-600":
                        variant === "blue",

                }

            )}

        >

            {children}

        </span>

    );


}