import Navbar from "../navbar";
import Titre from "../titre";

export default function RaiponcePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[87.7svh]">
        <Titre />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KoFOaB9c8eI?si=jFgrwYFbbaCyf6dT?autoplay=1"
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
