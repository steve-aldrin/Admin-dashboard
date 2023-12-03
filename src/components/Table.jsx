import { useState } from 'react'
import Pagination from "./UI/Pagination";
import DisplayRow from "./UI/DisplayRow";
import EditRow from "./UI/EditRow";
import React from 'react';
import { useData } from "./hooks/useData";
import useTableData from './hooks/useTable';
import { useSelect } from './hooks/useSelect';

//table component 
const Table = ({ isChecked, setisChecked, selectAll, setSelectAll, userdata, setUserdata, query }) => {

 //state variables
    const [currentPage, SetcurrentPage] = useState(1);
    const [recordsPerpage, Setrecordsperpage] = useState(10)
    const [editContactId, setContactId] = useState("");
    const [editRowdata, seteditRowdata] = useState(
        {
            name: "",
            email: "",
            role: "",

        }
    )

    //using custom components 
    const { isLoading, error } = useData(setUserdata);
    const { handleDeleteClick, search, handleEditonSubmit, handleEditRowchange, handleEditClick } = useTableData(setUserdata, setContactId, seteditRowdata, query)

    const { handleCheck, handleSelectAll } = useSelect(setisChecked, setSelectAll, isChecked, userdata);



  //Creating functions handling page switch
    const indexLastrecord = currentPage * recordsPerpage;
    const indexFirstrecord = indexLastrecord - recordsPerpage;

    const Movetopage = (number) => {
        SetcurrentPage(number)
    }
    const Nextpage = (number) => {
        if (currentPage != number) SetcurrentPage(currentPage + 1);
    }
    const Prevpage = (number) => {
        if (currentPage != number) SetcurrentPage(currentPage - 1);
    }


   //Loading and error messages
    if (isLoading) return <div> Loading...</div>
    if (error) {
        return <div>Error: {error.message}</div>;
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
                    {userdata && search(userdata)?.slice(indexFirstrecord, indexLastrecord).map((data) => {

                        return (
                            <React.Fragment key={data.id}>

                                {editContactId === data.id ? <EditRow key={data.id} handleEditonSubmit={handleEditonSubmit} editRowdata={editRowdata} handleEditRowchange={handleEditRowchange} /> : <DisplayRow key={data.id} isChecked={isChecked} handleCheck={handleCheck} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} data={data} />
                                }

                            </React.Fragment>
                        );
                    })}


                </tbody>
            </table>

            <div className="flex justify-evenly mt-4">
                <div className="flex justify-evenly items-center gap-2">

                    <div className="  text-slate-500">Selected {isChecked.length} of {Math.ceil(userdata ? search(userdata).length : 0 / recordsPerpage)} row(s) </div>
                </div>



                <Pagination recordsPerpage={recordsPerpage} totalRecords={userdata ? search(userdata).length : 0} Movetopage={Movetopage} Nextpage={Nextpage} Prevpage={Prevpage} currentPage={currentPage} />


            </div>

        </>

    );
}

export default Table;