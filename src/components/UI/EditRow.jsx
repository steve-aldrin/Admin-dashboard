
//component for Editing rows
const EditRow = ({handleEditonSubmit,editRowdata,handleEditRowchange}) => {
    return ( <>
    
    
    <tr  className="border border-slate-200">
               <td className="p-3   dark:text-white text-sm" > Editing </td>
                <td className="p-3  text-sm" ><input className="p-1" type="text" name="name" value={editRowdata.name} onChange={handleEditRowchange}/> </td>
                <td className="p-3   text-sm"><input className="p-1" type="text" name="email" value={editRowdata.email} onChange={handleEditRowchange}/></td>
                <td className="p-3   text-sm" ><input className="p-1"type="text" name="role" value={editRowdata.role} onChange={handleEditRowchange}/></td>
                <td className="p-3 dark:text-white  text-sm" > <button className="save" onClick={handleEditonSubmit}>Save</button></td>
     </tr>
    
    </> );
}
 
export default EditRow;