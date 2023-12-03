import { useState } from "react";
import CheckBox from "../Icons/EditIcon";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/Deleteicon";
const DisplayRow = ({isChecked,handleCheck,handleDeleteClick,handleEditClick,data}) => {

   return ( <>
    
    <tr key={data.id} className={isChecked.includes(data.id) ?"border border-slate-200 bg-slate-200 dark:bg-slate-700":" border border-slate-200   "}>
                <td className="p-3  text-sm"><input className="rounded-sm"type="checkbox" onChange={handleCheck} value={data.id} checked={isChecked.includes(data.id)}></input>  </td>
                <td className="p-3 dark:text-white  text-sm">{data.name}</td>
                <td className="p-3 dark:text-white  text-sm">{data.email}</td>
                <td className="p-3 dark:text-white text-sm" >{data.role}</td>
               
                <td> 
               <div className="flex gap-2  ">
                   <div className="p-1 my-3 rounded-md border border-slate-200 dark:bg-indigo-500" ><button className="edit" onClick={(event) => handleEditClick(event, data)}><EditIcon /> </button></div>
                   <div className="p-1 my-3 rounded-md border border-slate-200   text-red-500  dark:text-white dark:bg-indigo-500">   <button className="delete" onClick={() => { handleDeleteClick(data.id) }}><DeleteIcon/></button></div>
               </div>

             
                </td>
      
     </tr>
    
    </> );
}
 
export default DisplayRow;