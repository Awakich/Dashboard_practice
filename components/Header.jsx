import Image from "next/image";
import Avatar from "../assets/image/avatar.jpg";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="ml-24 py-3 px-2 sm:px-5 flex justify-between items-center bg-gray-200">
      <div className="flex flex-col ml-6 sm:ml-10">
        <h2 className="font-bold text-2xl">
          Hello, <span className="text-purple-600">{session.user.name}</span>
        </h2>
        <p>Welcome to the board</p>
      </div>

      <div className="absolute top-3 sm:right-5 right-1">
        <Image
          className="h-12 w-12 rounded-full cursor-pointer"
          alt=""
          src={Avatar}
        />
      </div>
    </header>
  );
};

export default Header;
