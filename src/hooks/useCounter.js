import { useState } from "react"


export const useCounter = (init) => {
    const [ count,setCount ] = useState(init.initialValue);
    const [min , setMin ] = useState(init.minValue);
    const [max , setMax ] = useState(init.maxValue);

    const incCount  = (e) => {
        if((count<=12 && e==3) || (e==1 && count<=14)){
            return setCount(count + e);
        }
        else{
            return setMax(max)
        }
    }
    const decCount  = (e) => {
        if((count>=7 && e==2) || (e==4 && count>=9)){
            return setCount(count - e);
        }
        else{
            return setMin(min)
        }

    }

    return  [count,incCount,decCount ];
};
