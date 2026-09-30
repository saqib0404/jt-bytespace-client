import { cn } from "@/lib/utils";
import type { ReactNode } from "react";


interface CardProps {

    children: ReactNode;

    className?: string;

}


export default function Card({

    children,

    className,

}: CardProps) {


    return (

        <div

            className={cn(

                "rounded-2xl",

                "bg-white",

                "border border-neutral-100",

                "shadow-card",

                "overflow-hidden",

                className

            )}

        >

            {children}

        </div>

    );


}