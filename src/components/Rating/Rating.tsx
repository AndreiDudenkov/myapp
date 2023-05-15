import React, {useCallback, useState} from 'react';
import {RatingControlForMemo} from './ControlledRaiting';

type RatingPropsType = {

}

export function RatingForMemo(props: RatingPropsType) {
    let [mark, setMark] = useState(0)

        return (
            <div>
                <Star selected={mark > 0} setMark={()=>setMark(1)}/>
                <Star selected={mark > 1} setMark={()=>setMark(2)} />
                <Star selected={mark > 2} setMark={()=>setMark(3)} />
                <Star selected={mark > 3} setMark={()=>setMark(4)} />
                <Star selected={mark > 4} setMark={()=>setMark(5)} />
            </div>
        );
}

export const Rating = React.memo(RatingForMemo)

type StarPropsType = {
    selected: boolean
    setMark: () => void
}
const Star = (props: StarPropsType)=> {
   return <span onClick={()=>props.setMark()}>{props.selected ? <b>star </b> : 'star '}</span>
}
    //
    // if (props.selected) {
    //        return  <span> <b>star</b> </span>
    //     } else {
    //        return <span> star </span>
    //     }

