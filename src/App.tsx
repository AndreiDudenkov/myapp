import React, {useState} from 'react';
import './App.css';
import {ControlledAccordion} from './components/Accordion/ControlledAccordion';
import {Rating} from './components/Rating/Rating';
import {Indicator} from './components/Indicator/Indicator';
import {RatingControl, RatingValuePropsType} from './components/Rating/ControlledRaiting';
import {IndicatorControlled} from './components/Indicator/ControlledIndicator';
import {Select} from './components/Select/Select';
import {Accordion} from './components/Accordion/Accordion';


function App() {

    let items = [{title: 'Andrei', value: 1}, {title: 'Dimych', value: 2},{title: 'Nikolay', value: 3}]

    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    let [deployed, setDeployed] = useState<boolean>(true)
    let [status, setStatus] = useState<boolean>(true)
    let [name, setName] = useState(items[0].title)
    return (
        <div id={'app'}>
            {/*<PageTitle title={'This is App component'} />*/}
            {/*<PageTitle title={'My friends'} />*/}
            <ControlledAccordion titleValue={'Title menu'}
                                 deployed={deployed}
                                 setDeployed={() => setDeployed(!deployed)}
                                 items={items}
                                 onClick={()=>alert('user')}/>
            <Accordion titleValue={'Title menu'}
                       items={items}
                                 />
            {/*<ControlledAccordion titleValue={'Title users'} />*/}
            {/*<Rating/>*/}
            {/*<Rating/>*/}
            {/*<Rating />*/}
            {/*<Rating />*/}
            <Rating />
            <RatingControl ratingValue={ratingValue} onClick={setRatingValue}/>
            <IndicatorControlled status={status} setStatus={ setStatus} /><br/>
            <Indicator setStatus={setStatus}/> {status.toString()}
            <Select value={name} onChange={setName} items={items}/>

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
