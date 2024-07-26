import Navbar from "../navbar";
import Titre from "../titre";

export default function Elsa() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[87.7svh]">
        <Titre />
        <iframe
          className="w-2/5 h-2/5"
          src="https://www.youtube.com/embed/wQP9XZc2Y_c?autoplay=1"
          title="princesse"
          allowFullScreen
        ></iframe>
      </div>
      <Navbar />
    </>
  );
}
