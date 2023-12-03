import Facefrown from "../Icons/Facefrown";

const SwitchLight = () => {
    return ( <>
        <div className="flex items-center gap-2 border dark:bg-indigo-500  p-1 rounded-md ">
            <div className="text-xs"> Switch to light theme</div>
            <Facefrown/>
        </div>
    </>
    
    );
}
 
export default SwitchLight;