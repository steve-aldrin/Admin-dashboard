import axios from 'axios';
export async function getData(){
    const res = await axios.get(import.meta.env.VITE_API_URL);

    return res.data;
   
  
}