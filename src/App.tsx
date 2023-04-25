import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {Indicator} from './components/Indicator/Indicator';
import {RatingControl, RatingValuePropsType} from './components/Rating/ControlledRaiting';
import {IndicatorControlled} from './components/Indicator/ControlledIndicator';


function App() {


    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    let [deployed, setDeployed] = useState<boolean>(true)
    let [status, setStatus] = useState<boolean>(true)

    return (
        <div id={'app'}>
            {/*<PageTitle title={'This is App component'} />*/}
            {/*<PageTitle title={'My friends'} />*/}
            <Accordion titleValue={'Title menu'}
                       deployed={deployed}
                       setDeployed={()=>setDeployed(!deployed)}/>
            {/*<Accordion titleValue={'Title users'} />*/}
            <Rating/>
            <Rating/>
            {/*<Rating />*/}
            {/*<Rating />*/}
            {/*<Rating />*/}
            {/*<RatingControl ratingValue={ratingValue} onClick={setRatingValue}/>*/}
            {/*<IndicatorControlled status={status} setStatus={ setStatus} /><br/>*/}
            <Indicator setStatus={setStatus}/> {status.toString()}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
