
import { Link } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
      <div className=" flex flex-col items-center md:items-start gap-4">
          <Image
            src="/logo.png"
            alt="logo-du-site"
            width={36}
            height={36}
          />
          <p className="text-md font-medium tracking-wider text-gray-500">DEBEING</p>
          <p className="text-sm text-gray-500">@ 2025 Debeing</p>
          <p className="text-sm text-gray-500">Tous droit reserve.</p>
      </div>
      <div className="flex flex-col items-center text-sm md:items-start gap-4 text-gray-500">
        <p>Liens</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Term of service</Link>
        <Link href="/">Privacy policy</Link>
        <Link href="/">About</Link>
      </div>
    </div>
  );
};

export default Footer;
