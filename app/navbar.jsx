import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-secondary border-2 border-bordercolor flex flex-row justify-center gap-28">
        <Image src="/fuckvincentpasquiou.png" width={100} height={200} />
        <Link href="/elsa">
          <button className="focus:animate-bounce">
            <Image
              src="/princ1.png"
              width={100}
              height={100}
              className="hover:animate-bounce focus:animate-bounce"
            />
          </button>
        </Link>
        <Link href="/vaiana">
          <Image
            src="/princ2.PNG"
            width={100}
            height={100}
            className="hover:animate-bounce"
          />
        </Link>
        <Link href="/raiponce">
          <Image
            src="/princ3.png"
            width={70}
            height={70}
            className="hover:animate-bounce"
          />
        </Link>
        <Image src="/fuckvincentpasquiou.png" width={100} height={200} />
      </div>
    </>
  );
}
