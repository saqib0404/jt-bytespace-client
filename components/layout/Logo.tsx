import Link from "next/link";


export default function Logo() {

    return (

        <Link
            href="/"
            className="
      flex
      items-center
      gap-2
      "
        >

            <span
                className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-md
        bg-secondary-400
        font-heading
        font-bold
        text-neutral-950
        "
            >
                b
            </span>


            <span
                className="
        font-heading
        text-xl
        font-semibold
        text-white
        "
            >
                ByteSpace
            </span>


        </Link>

    );

}