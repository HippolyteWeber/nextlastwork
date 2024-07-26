import Navbar from "../navbar";
import Titre from "../titre";

export default function Vaianapage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[87.7svh]">
        <Titre />
        <iframe
          className="w-2/5 h-2/5"
          src="https://www.youtube.com/embed/cDuwyrnVN4M?si=LtUSNtUvPGvNo62j?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Navbar />
    </>
  );
}
