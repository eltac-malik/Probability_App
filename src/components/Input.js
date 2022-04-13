import {useContext,useState} from 'react'
import Context from '../context/Context'

function Input() {

    const cntx = useContext(Context);
    const {inpData,setInpData} = cntx;
    const [data,setData] = useState("");


    const handleClick = () =>
    {
        setInpData([...inpData,data]);
        setData("")
    }

    return (
        <div className="inputs">
        <div className="input" >
            <input type="number" value={data} onChange={(e)=> setData(e.target.value)}/>
            <button disabled={data==""?true:false} onClick={handleClick}>Generate</button>
        </div>
        </div>
    )
}

export default Input
