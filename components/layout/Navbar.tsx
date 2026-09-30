import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";


const links = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Courses",
        href: "#courses"
    },
    {
        label: "Creators",
        href: "#creators"
    },
];


export default function Navbar() {

    return (

        <header
            className="
absolute
top-0
left-0
z-50
w-full
"
        >


            <Container>

                <nav
                    className="
flex
h-24
items-center
justify-between
"
                >


                    <Logo />


                    <div
                        className="
hidden
items-center
gap-8
md:flex
"
                    >

                        {
                            links.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="
text-sm
text-white/90
transition
hover:text-white
"
                                >
                                    {item.label}
                                </Link>
                            ))
                        }

                    </div>



                    <div
                        className="
hidden
items-center
gap-5
md:flex
"
                    >

                        <Link
                            href="/signin"
                            className="
text-sm
text-white
"
                        >
                            Sign In
                        </Link>


                        <Button
                            variant="secondary"
                            size="sm"
                        >
                            Join Us
                        </Button>


                        <ShoppingBag
                            className="
text-white
"
                            size={22}
                        />


                    </div>


                </nav>


            </Container>


        </header>

    );

}