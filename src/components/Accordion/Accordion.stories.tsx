import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions'
import exp from 'constants';


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion change')
const callback2 = action('item change')

export const MenuDeployedMode = () => <Accordion titleValue={'Title menu'}
                                                 deployed={true}
                                                 setDeployed={callback}
                                                 items={[{title: 'Andrei', value: 1}, {title: 'Dimych', value: 2}]}
                                                 onClick={callback2}/>

export const MenuUnDeployedMode = () => <Accordion titleValue={'Title menu'}
                                                   deployed={false}
                                                   setDeployed={callback}
                                                   items={[]}
                                                   onClick={callback2}/>

export const ChangingMode = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={'Users'}
                      deployed={value}
                      setDeployed={() => setValue(!value)}
                      items={[{title: 'Andrei', value: 1}, {title: 'Dimych', value: 2}]}
                      onClick={callback2}/>
}
