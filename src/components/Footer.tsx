
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
   <footer>
     <div className="mt-16 flex flex-col items-center md:justify-between md:flex-row gap-8 md:gap-0 md:items-start bg-gray-800 p-8 rounded-lg">
      <div className=" flex flex-col items-center md:items-start gap-4">
         <Link href="/">
          <Image
            src="/logo.png"
            alt="logo-du-site"
            width={36}
            height={36}
          />
          <p className="text-md font-medium tracking-wider text-gray-500">DEBEING</p>
         </Link>
          <p className="text-sm text-gray-500">@ 2025 Debeing</p>
          <p className="text-sm text-gray-500">Tous droit reserve.</p>
      </div>
      <div className="flex flex-col items-center text-sm md:items-start gap-4 text-gray-500">
        <p className="text-sm text-amber-50">Liens</p>
        <Link href="/homepage">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/">Term of service</Link>
        <Link href="/">Privacy policy</Link>
        <Link href="/">About</Link>
      </div>
      <div className="flex flex-col items-center text-sm md:items-start gap-4 text-gray-500">
        <p className="text-sm text-amber-50">Liens</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Term of service</Link>
        <Link href="/">Privacy policy</Link>
        <Link href="/">About</Link>
      </div>
      <div className="flex flex-col items-center text-sm md:items-start gap-4 text-gray-500">
        <p className="text-sm text-amber-50">Liens</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Term of service</Link>
        <Link href="/">Privacy policy</Link>
        <Link href="/">About</Link>
      </div>
    </div>
   </footer>
  );
};

export default Footer;
