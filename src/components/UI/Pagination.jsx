import Leftarrow from "../Icons/Leftarrow";
import Leftdoublearrow from "../Icons/Leftdoublearrow";
import RightDoublearrow from "../Icons/RightDoublearrow";
import Rightarrow from "../Icons/Rightarrow";

const Pagination = ({recordsPerpage,totalRecords,Movetopage,Nextpage,Prevpage,currentPage}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalRecords/recordsPerpage);i++){
        pageNumbers.push(i);
    }
    console.log();
    
    return ( <>
        <div className="flex ml-auto dark:text-white   items-center gap-8">
            <div> Page {currentPage} of {pageNumbers[pageNumbers.length-1]}</div>
            <div className="flex gap-1 items-center">
                <div className="first-page dark:bg-indigo-500 cursor-pointer border  border-slate-200 rounded-md" onClick={() => Movetopage(pageNumbers[0])}>
                    <Leftdoublearrow />
                </div>


                <div className="previous-page  dark:bg-indigo-500 cursor-pointer border border-slate-200 rounded-md"  onClick={() => Prevpage(pageNumbers[0])}>
                    <Leftarrow />
                </div>

                {pageNumbers.map((number) => {
                    return <button  key={number}  onClick={() => Movetopage(number)} className={`border border-slate-200 rounded-md p-1 px-2 page-${number}  cursor-pointer  `}>{number}</button>
                
                })}
                <div className="next-page cursor-pointer border dark:bg-indigo-500 border-slate-200 rounded-md dark:bg-indigo-500"  onClick={() => Nextpage(pageNumbers[pageNumbers.length - 1])}>
                    <Rightarrow />
                </div>
                <div className="last-pagedark:bg-indigo-500  cursor-pointer border border-slate-200 rounded-md dark:bg-indigo-500" onClick={() => Movetopage(pageNumbers[pageNumbers.length - 1])}>
                    <RightDoublearrow />
                </div>

            </div>


        </div>
    
        
    </> ); 
}
 
export default Pagination;