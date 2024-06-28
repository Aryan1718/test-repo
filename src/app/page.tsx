import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-3xl mt-40">
        Hello
        
        <Link href='/data' className="hover:text-red-500">Click here</Link>
        <Link href='/user'>Redirect</Link>
    </div>
       
    </>
  );
}
