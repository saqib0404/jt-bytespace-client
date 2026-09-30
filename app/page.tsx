import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export default function Home() {

  return (

    <main
      className="
min-h-screen
bg-primary-600
"
    >

      <Navbar />


      <div
        className="
flex
min-h-screen
items-center
justify-center
"
      >

        <h1
          className="
font-heading
text-6xl
text-white
"
        >
          ByteSpace
        </h1>

      </div>


      <Footer />


    </main>

  );

}