import Head from "next/head";
import SwitchToggle from "../components/SwitchToggle";
import DropdownMenu from "../components/DropdownMenu";
import SelectListbox from "../components/SelectListbox";
import Accordion from "../components/Accordion";
import DialogModal from "../components/DialogModal";
import SelectRadios from "../components/SelectRadios";
import Animation from "../components/Animation";
import Container from "../components/Container";
import Typography from "../components/Typography";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind CSS & Headless UI</title>
        <meta name="description" content="Tailwind CSS & Headless UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 pt-20 pb-20 text-white text-center min-h-screen bg-gradient-to-br from-blue-700 to-purple-500">
        <h1 className="py-6 text-6xl">
          Tailwind CSS & Headless UI <br />
          <span className="text-3xl">with React (Next.js)</span>
        </h1>
        <p className="">
          Utilise Tailwind CSS & Headless UI to build React componnents for
          Next.js.
        </p>

        <Container>
          <h2 className="block m-6 text-white text-lg">
            Transition & Animation
          </h2>
          <Animation></Animation>
        </Container>

        <Container>
          <SwitchToggle></SwitchToggle>
        </Container>

        <Container>
          <DropdownMenu></DropdownMenu>
        </Container>

        <Container>
          <SelectListbox></SelectListbox>
        </Container>
        <Container>
          <Accordion></Accordion>
        </Container>
        <Container>
          <DialogModal></DialogModal>
        </Container>
        <Container>
          <SelectRadios></SelectRadios>
        </Container>
        <Container>
          <Typography></Typography>
        </Container>
      </main>
    </div>
  );
}
