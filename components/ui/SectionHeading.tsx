import { cn } from "@/lib/utils";


interface SectionHeadingProps {

    title: string;

    description?: string;

    align?:
    | "left"
    | "center";

}


export default function SectionHeading({

    title,

    description,

    align = "center",

}: SectionHeadingProps) {


    return (

        <div

            className={cn(

                "max-w-3xl",

                {

                    "text-center mx-auto":
                        align === "center",

                    "text-left":
                        align === "left",

                }

            )}

        >


            <h2

                className="
font-heading
text-3xl
font-semibold
leading-tight
text-neutral-950

sm:text-4xl
lg:text-5xl
"

            >

                {title}

            </h2>



            {description && (

                <p

                    className="
mt-5
text-base
leading-relaxed
text-neutral-500
sm:text-lg
"

                >

                    {description}

                </p>

            )}


        </div>

    );


}