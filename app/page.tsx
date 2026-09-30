import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";


export default function Home() {


  return (

    <main className="min-h-screen bg-neutral-50">


      <Container>


        <div className="flex min-h-screen flex-col items-center justify-center gap-8">


          <Badge>
            Featured Course
          </Badge>


          <h1
            className="
font-heading
text-5xl
font-bold
text-neutral-950
"
          >

            ByteSpace

          </h1>


          <Button
            variant="secondary"
            size="lg"
          >

            Join Us

          </Button>


        </div>


      </Container>


    </main>

  )

}