import Image from "next/image";
import Navbar from "./navbar";
import Titre from "./titre";

export default function Home() {
  return (
    <>
      <div className="h-[81svh]">
        <Titre />
      </div>
      <Navbar />
    </>
  );
}
