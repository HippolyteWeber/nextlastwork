import Image from "next/image";

export default function Titre() {
  return (
    <div className="w-screen flex flex-row justify-evenly my-12">
      <Image
        src="/coeurgras.png"
        width={100}
        height={150}
        className="animate-spin"
      />
      <h1 className="text-5xl font-title">Lyana World</h1>
      <Image
        src="/coeurgras.png"
        width={100}
        height={150}
        className="animate-spin"
      />
    </div>
  );
}
