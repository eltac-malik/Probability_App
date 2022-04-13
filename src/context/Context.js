import {createContext,useState} from 'react'

const Context = createContext();

export const Prov = ({children})=>
{
    const [inpData,setInpData] = useState([]);

    const values = {inpData,setInpData}


    return <Context.Provider value={values}>{children}</Context.Provider>
}

export default Context;