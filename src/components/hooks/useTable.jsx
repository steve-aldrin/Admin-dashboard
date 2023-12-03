//custom hook for table manipulation
export const useTableData = (setUserdata,setContactId,seteditRowdata,query) => {
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

    
   
   
    return ({handleDeleteClick,search,handleEditonSubmit,handleEditRowchange,handleEditClick});
}
 
export default useTableData;