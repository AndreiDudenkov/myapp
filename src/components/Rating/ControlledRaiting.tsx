import React, {useCallback, useState} from 'react';
import exp from 'constants';
import {rename} from 'fs';
import {IndicatorControlledForMemo} from '../Indicator/ControlledIndicator';

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingControlPropsType = {
    ratingValue: RatingValuePropsType
    onClick:(value:RatingValuePropsType)=>void
}

export function RatingControlForMemo(props: RatingControlPropsType) {

    return (
        <div>
            <Star selected={props.ratingValue > 0} onClick={props.onClick} val={1}/>
            <Star selected={props.ratingValue > 1} onClick={props.onClick} val={2}/>
            <Star selected={props.ratingValue > 2} onClick={props.onClick} val={3}/>
            <Star selected={props.ratingValue > 3} onClick={props.onClick} val={4}/>
            <Star selected={props.ratingValue > 4} onClick={props.onClick} val={5}/>
        </div>
    );
}
export const RatingControl = React.memo(RatingControlForMemo)

type StarPropsType = {
    selected: boolean
    onClick:(value:RatingValuePropsType)=>void
    val:RatingValuePropsType
}
const Star = (props: StarPropsType) => {
    return <span onClick={()=>props.onClick(props.val)}>{props.selected ? <b>star </b> : 'star '}</span>
}