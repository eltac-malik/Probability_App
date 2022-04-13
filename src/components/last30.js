import {useContext} from 'react'
import Context from '../context/Context'

function Last30() {

    const cntx = useContext(Context)

    const {inpData,setInpData} = cntx

    const l30 = inpData.map((e)=>
    {
       return Number(e)
    }).slice(-30)

    const up1_5 = l30.filter((e)=>
    {
        return e >= 1.5
    })

    const up2 = l30.filter((e)=>{
        return e >= 2
    })


    const rest1_5 = ((up1_5.length/20)*100).toFixed(2)
    const rest2 = ((up2.length/20)*100).toFixed(2)
    




    return (
        <div className="card">
             <h1 className="title">LAST 30</h1>
             <div className="probability">
            <div className="oneFive">
                <h1 className="h1-pst">1.5+</h1>
                <h1>{rest1_5}%</h1>
            </div>
            <div className="twoZero">
                <h1 className="h1-pst">2.0+</h1>
                <h1>{rest2}%</h1>
            </div>
            </div>
        </div>
    )
}

export default Last30
