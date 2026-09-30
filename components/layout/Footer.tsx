import Container from "../ui/Container";
import Logo from "./Logo";
import Input from "../ui/Input";
import Button from "../ui/Button";


const footerGroups = [

    {
        title: "Browse",
        links: [
            "Featured Courses",
            "Featured Categories",
            "Business",
            "IT",
            "Design"
        ]
    },


    {
        title: "Development",
        links: [
            "Development",
            "Marketing",
            "Photography",
            "Finance",
            "Sport"
        ]
    },


    {
        title: "Platform",
        links: [
            "Become a Creator",
            "Affiliate Program",
            "Contact",
            "Help",
            "About"
        ]
    }

];


export default function Footer() {

    return (

        <footer
            className="
border-t
border-neutral-100
bg-white
"
        >


            <Container>

                <div
                    className="
grid
gap-10
py-16
md:grid-cols-4
"
                >


                    <div>

                        <Logo />


                        <p
                            className="
mt-6
text-sm
text-neutral-500
"
                        >
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>


                        <div
                            className="
mt-6
flex
gap-3
"
                        >

                            <Input
                                placeholder="Enter your email"
                            />

                            <Button
                                variant="secondary"
                            >
                                Search
                            </Button>


                        </div>


                    </div>



                    {
                        footerGroups.map((group) => (

                            <div key={group.title}>

                                <h3
                                    className="
font-medium
text-neutral-950
"
                                >
                                    {group.title}
                                </h3>


                                <ul
                                    className="
mt-5
space-y-3
"
                                >

                                    {
                                        group.links.map((link) => (

                                            <li
                                                key={link}
                                                className="
text-sm
text-neutral-500
"
                                            >
                                                {link}
                                            </li>

                                        ))
                                    }

                                </ul>


                            </div>

                        ))
                    }


                </div>


                <div
                    className="
border-t
border-neutral-100
py-6
text-sm
text-neutral-500
"
                >

                    © 2023 ByteSpace. All rights reserved.

                </div>


            </Container>


        </footer>

    );

}