import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Indicator} from './components/Indicator/Indicator';

function App () {
    console.log('App rendering')
    return (
        <div id={"app"}>
            {/*<PageTitle title={'This is App component'} />*/}
            {/*<PageTitle title={'My friends'} />*/}
            {/*<Accordion titleValue={'Title menu'} deployed={false} />*/}
            {/*<Accordion titleValue={'Title users'} deployed={false}/>*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
            <Indicator /> <br/>
            <Indicator /><br/>
            <Indicator /><br/>
            <Indicator /><br/>
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
