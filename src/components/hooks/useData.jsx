import { useQuery } from "react-query";
import { useState,useEffect} from 'react'
import  {getData} from "../Api/Fetchdata"
export const useData = (setUserdata) => {

    const { isLoading, error, data: data,
    } = useQuery({ queryKey: ["id"], queryFn: () => getData() })


    useEffect(() => {
        if (data) {
            setUserdata(data);
        }
    }, [data])


return {isLoading,error}
}
 
