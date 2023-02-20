import {TiWeatherStormy} from "react-icons/ti"

const DailyBox = () => {
  return (
    <div className="w-22 h-24 grid place-items-center p-4 border border-white rounded-xl backdrop-blur-sm">
        <TiWeatherStormy size={40}/>
        <span>25ºC</span>
    </div>
  )
}
export default DailyBox