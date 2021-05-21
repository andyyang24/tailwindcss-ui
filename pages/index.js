import Head from "next/head";
import SwitchToggle from "../components/SwitchToggle";
import DropdownMenu from "../components/DropdownMenu";
import SelectListbox from "../components/SelectListbox";
import Accordion from "../components/Accordion";
import DialogModal from "../components/DialogModal";
import SelectRadios from "../components/SelectRadios";
import Animation from "../components/Animation";

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
          Utilise Tailwind CSS & Headless UI to build React componnents for Next.js.
        </p>

        <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
          <h2 className="block m-6 text-white text-lg">Transition & Animation</h2>

          <Animation></Animation>
        </div>
        <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
          <SwitchToggle></SwitchToggle>
        </div>
        <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
          <DropdownMenu></DropdownMenu>
        </div>
        <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
          <SelectListbox></SelectListbox>
        </div>
        <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
          <Accordion></Accordion>
        </div>
        <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
          <DialogModal></DialogModal>
        </div>
        <div className="pb-12 mx-2 my-6 flex flex-col items-center justify-center border-b border-dotted	">
          <SelectRadios></SelectRadios>
        </div>
        <div className="pb-12 m-6 flex flex-col items-center justify-center border-b border-dotted	">
          <h2 className="block m-6 text-white text-lg">Typography</h2>
          <p class="text-xs ...">The quick brown fox ...</p>
          <p class="text-sm ...">The quick brown fox ...</p>
          <p class="text-base ...">The quick brown fox ...</p>
          <p class="text-lg ...">The quick brown fox ...</p>
          <p class="text-xl ...">The quick brown fox ...</p>
          <p class="text-2xl ...">The quick brown fox ...</p>
          <p class="text-3xl ...">The quick brown fox ...</p>
          <p class="text-4xl ...">The quick brown fox ...</p>
          <p class="text-5xl ...">The quick brown fox ...</p>
          <p class="text-6xl ...">The quick brown fox ...</p>
          <p class="text-7xl ...">The quick brown fox ...</p>
          <p class="text-8xl ...">The quick brown fox ...</p>
          <p class="text-9xl ...">The quick brown fox ...</p>
        </div>
      </main>
    </div>
  );
}
