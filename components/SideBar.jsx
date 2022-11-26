import { signOut } from "next-auth/react";

const SideBar = () => {
  return (
    <div className="fixed w-[200px] h-screen bg-gray-200">
      <div className="p-3">
        <h2 className="font-bold text-2xl text-center">Dashing</h2>
      </div>

      <div className="flex p-2 z-1 sm:p-5">
        <ul className="flex flex-col items-center font-semibold text-xl space-y-3 sm:space-y-5">
          <li className="links">
            <a href="#">Dasboard</a>
          </li>

          <li className="links">
            <a href="#">Explore</a>
          </li>

          <li className="links">
            <a href="#">Library</a>
          </li>

          <li className="links">
            <a href="#">Favourite</a>
          </li>

          <li className="links">
            <a href="#">Settings</a>
          </li>

          <li className="links">
            <button
              className="px-4 py-2 bg-white rounded-3xl font-semibold hover:bg-gray-100"
              onClick={() => signOut()}
              href="#"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
