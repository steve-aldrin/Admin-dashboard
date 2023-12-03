
//custom hook handling selection 
export const useSelect = (setisChecked,setSelectAll,isChecked,userdata) => {
    const handleCheck=(e)=>{
  
        const {value,checked}=e.target;
    
        if(checked){
            setisChecked([...isChecked,value])
        }
        else{
            setisChecked(isChecked.filter((checkedValue) => checkedValue !== value));
        }
    
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



    return ( {handleCheck,handleSelectAll} );
}
 
export default useSelect;