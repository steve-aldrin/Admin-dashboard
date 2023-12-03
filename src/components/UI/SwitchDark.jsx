import Facesmile from "../Icons/Facesmile";
//ui compoenent for toggling to dark mode
const SwitchDark = () => {
    return (
        <>
        <div className="flex items-center gap-2 border border-slate-200 p-1 rounded-md ">
            <div className="text-xs"> Switch to dark theme</div>
           <Facesmile/> 
        </div>
        </>
      );
}
 
export default SwitchDark;