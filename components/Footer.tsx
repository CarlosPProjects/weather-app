import DailyBox from "./DailyBox"

const Footer = () => {
  return (
    <div className="flex flex-row overflow-x-scroll gap-4 text-white pb-8 px-[3%]">
        <DailyBox/>
        <DailyBox/>
        <DailyBox/>
        <DailyBox/>
        <DailyBox/>
        <DailyBox/>
        <DailyBox/>
    </div>
  )
}
export default Footer