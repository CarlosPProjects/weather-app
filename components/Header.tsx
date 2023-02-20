import { FiCheck, FiMapPin } from "react-icons/fi";

const Header = () => {
  return (
    <div className="inline-block container-search w-fit px-[3%]">
      <div className="flex bg-transparent rounded-full border-gray-500 border backdrop-blur-sm">
        <input
          type="text"
          placeholder="Your location"
          className="bg-transparent text-gray-50 font-semibold text-xs border-none outline-none p-0 w-0 transition-all duration-200"
        />
        <div className="flex items-center justify-center w-8 h-8 m-2 rounded-full icon">
          <FiMapPin className="absolute icon-search" color="gray" size={20} />
          <FiCheck
            className="absolute opacity-0 icon-close"
            color="gray"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
