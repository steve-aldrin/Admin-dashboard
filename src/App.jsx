
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userdata from './components/Table'
import Searchbar from './components/UI/SearchBar'
import { useState } from 'react'
import Facefrown from './components/Icons/Facefrown'
import SwitchDark from './components/UI/SwitchDark'
import SwitchLight from './components/UI/SwitchLight'


function App() {
  const [query, setQuery] = useState("");
  const [userdata, setUserdata] = useState([]);
  const [isChecked, setisChecked] = useState([]);
  const [selectAll, setSelectAll] = useState(false)
  const [dark, setDark] = useState(false)
  const hanndledeleteSelected = () => {

 const newUserdata = userdata.filter((user) => !isChecked.includes(user.id));
  setUserdata(newUserdata);
  setisChecked([]);
  setSelectAll(false)
  }
  return (
    <div className={dark ? " dark box bg-slate-800 overflow-auto min-h-screen" : "overflow-auto min-h-screen"}>
      <div className='h-full dark:  overflow-auto'>

        <div className='flex flex-col dark:text-white gap-3 items-center text-xl '>
          <div className=''>Welcome Admin</div>
          <div onClick={() => setDark(!dark)} className=' dark:text-white'>{dark ? <SwitchLight /> : <SwitchDark />}</div>
        </div>
        <div className='flex justify-center flex-col m-10 my-10 '>

          <div className='mb-2 dark:text-white '>
            <Searchbar setUserdata={setUserdata} setQuery={setQuery} hanndledeleteSelected={hanndledeleteSelected} />
          </div>
          <Userdata isChecked={isChecked} setisChecked={setisChecked} selectAll={selectAll} setSelectAll={setSelectAll} userdata={userdata} setUserdata={setUserdata} query={query} />
        </div>



      </div>

    </div>





  )
}

export default App
