import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Indicator} from './components/Indicator/Indicator';
import {RatingControl, RatingValuePropsType} from './components/Rating/ControlledRaiting';


function App () {


let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
let [deployed, setDeployed]=useState<boolean>(true)

    return (
        <div id={"app"}>
            {/*<PageTitle title={'This is App component'} />*/}
            {/*<PageTitle title={'My friends'} />*/}
            <Accordion titleValue={'Title menu'} deployed={deployed} setDeployed={setDeployed}/>
            {/*<Accordion titleValue={'Title users'} />*/}
            <Rating />
            <Rating />
            {/*<Rating />*/}
            {/*<Rating />*/}
            {/*<Rating />*/}
            {/*<RatingControl ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            <Indicator /><br/>
            <Indicator /><br/>
            <Indicator />

        </div>
    );
}
type PageTitlePropsType = {
    title:  string
}

function PageTitle (props: PageTitlePropsType) {

    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}




export default App;
