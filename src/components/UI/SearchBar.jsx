import DeleteIcon from "../Icons/Deleteicon";
import SearchIcon from "../Icons/SearchIcon";


//UI Component for Searchbar
const Searchbar = ({hanndledeleteSelected,setQuery}) => {
    

    return ( 
        <>
            <div className="flex justify-between ">
                <div className=" flex items-center gap-2">
                    <SearchIcon />
                    <input className="search-icon border dark:text-neutral-950 border-slate-200 p-1 rounded-md " onChange={(e) => setQuery(e.target.value)} placeholder="Search" type="text" />
                </div>
                <div> <button className="delete" onClick={() => hanndledeleteSelected()}>

                    <div className=" p-2 flex gap-2 bg-red-400 rounded-md dark:bg-indigo-500 text-white items-center"> <div>Delete Selected</div> <DeleteIcon /> </div> </button> </div>
            </div>
        </> );
}
 
export default Searchbar;