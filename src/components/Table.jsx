import { useState} from 'react'
import Pagination from "./UI/Pagination";
import DisplayRow from "./UI/DisplayRow";
import EditRow from "./UI/EditRow";
import React from 'react';
import { useData } from "./hooks/useData";
const Userdata = ({isChecked,setisChecked,selectAll,setSelectAll,userdata,setUserdata,query}) => {

   
    const [currentPage, SetcurrentPage] = useState(1);
    const [recordsPerpage, Setrecordsperpage] = useState(10)
    const [editContactId,setContactId]=useState("");
    const[editRowdata,seteditRowdata]=useState(
        {
            name:"",
            email:"",
            role:"",

        }
    )
   const{isLoading,error}=useData(setUserdata);


    const indexLastrecord = currentPage * recordsPerpage;
    const indexFirstrecord = indexLastrecord - recordsPerpage;

    const Movetopage=(number)=>{
        SetcurrentPage(number)
    }
    const Nextpage=(number)=>{
        if(currentPage!=number) SetcurrentPage(currentPage+1);
    }
    const Prevpage=(number)=>{
        if(currentPage!=number) SetcurrentPage(currentPage-1);
    }
    
     

   

    const handleEditRowchange=(event)=>{
     event.preventDefault();
     const fieldName=event.target.getAttribute("name");
     const fieldValue=event.target.value;
  
     const newFormdata={...editRowdata};
     newFormdata[fieldName]=fieldValue;
 
     seteditRowdata(newFormdata);
  
    }
      
   const handleEditClick=(event,data)=>{
    event.preventDefault();
    setContactId(data.id)

    const formValues={
        name:data.name,
        email:data.email,
        role:data.role
    }
    seteditRowdata(formValues)
   }

   const handleEditonSubmit=(event)=>{
    event.preventDefault();

    const editedRow={
        id:editContactId,
        name:editRowdata.name,
        email:editRowdata.email,
        role:editRowdata.role
    }
    if(userdata){ const editedData=[...userdata]

    const index=userdata?.findIndex((data)=>data.id===editContactId)
    editedData[index]=editedRow;
    setUserdata(editedData)
    setContactId(null)
    }
   }
   

    if(isLoading) return <div> Loading...</div>
    if (error) {
        return <div>Error: {error.message}</div>;
    }

  const  handleDeleteClick=(rowId)=>{

    const      newUserdata=[...userdata];
    const index=userdata.findIndex((data)=>data.id===rowId)
     newUserdata.splice(index,1)
     setUserdata(newUserdata)
}

const search_keys=["name","email","role"]
const search=(data)=>{
    return data.filter((item)=> 
    search_keys.some((key)=>item[key].includes(query))
    )
}




const handleCheck=(e)=>{
  
    const {value,checked}=e.target;

    if(checked){
        setisChecked([...isChecked,value])
    }
    else{
        setisChecked(isChecked.filter((checkedValue) => checkedValue !== value));
    }
    console.log(isChecked)
}



const handleSelectAll=(e)=>{
    if (e.target.checked) {
        const allUserIds = userdata.slice(0, 10).map((user) => user.id);
        setisChecked(allUserIds);
        setSelectAll(true)
        
    } else {
        setisChecked([]);
        setSelectAll(false)
    }

}
    return ( 
<>

<table className=" border border-slate-300 rounded-md"  >
  <thead className="text-left p-8">
    <tr>
      <th className="p-3"><input type="checkbox" onChange={handleSelectAll} checked={selectAll} ></input></th>
      <th className="p-3  text-sm font-semibold tracking-wide dark:text-white">Name</th>
      <th className="p-3 text-sm font-semibold tracking-wide dark:text-white " >Email</th>
      <th className="p-3 text-sm font-semibold tracking-wide dark:text-white">Role</th>
      <th className="p-3 text-sm font-semibold tracking-wide dark:text-white ">Actions</th>
    </tr>
  </thead>
  <tbody>
    {userdata&&search(userdata)?.slice(indexFirstrecord,indexLastrecord).map((data)=>{

        return (
        <React.Fragment key={data.id}>
        
        {editContactId===data.id ? <EditRow key={data.id} handleEditonSubmit={handleEditonSubmit} editRowdata={editRowdata} handleEditRowchange={handleEditRowchange}/>:<DisplayRow key={data.id} isChecked={isChecked} handleCheck={handleCheck} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} data={data} />
 }
          
          </React.Fragment>
        );
    })}
  
  
  </tbody>
</table>

<div className="flex justify-evenly mt-4">
<div className="flex justify-evenly items-center gap-2">
 
<div className="  text-slate-500">Selected {isChecked.length} of {Math.ceil(userdata ? search(userdata).length: 0/recordsPerpage)} row(s) </div>
</div>    



<Pagination recordsPerpage={recordsPerpage} totalRecords={userdata ? search(userdata).length: 0} Movetopage={Movetopage}  Nextpage={Nextpage} Prevpage={Prevpage} currentPage={currentPage}/>


</div>

</>
     
     );
}
 
export default Userdata;