import { FC } from "react";
import Header from "./Header";
import {TiWeatherShower} from "react-icons/ti"
import Footer from "./Footer";

const Weather = () => {
  return (
    <div className="h-screen flex flex-col bg-[url('/assets/clear-night.jpg')] bg-cover bg-center bg-no-repeat py-[3%]">
      <Header />
      <div className="flex-grow py-6 px-[3%]">
        <div className="w-1/2 grid place-items-center gap-2 border p-4 border-gray-500 text-gray-50 text-sm rounded-2xl backdrop-blur-sm shadow-lg">
          <TiWeatherShower size={40}/>
          <h5>Canada</h5>
          <h1 className="text-3xl font-medium">25ºC</h1>
          <h5>Tueday</h5>
          <h5>28/2/2023</h5>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Weather;
