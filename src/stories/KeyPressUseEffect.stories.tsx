import React, {useEffect, useState} from 'react';


export default {
    title: 'KeyPressUseEffect'
}


export const KeyPressExample = () => {
    let [text, setText] = useState('')

    useEffect(() => {


             const keyHandler =  (e: KeyboardEvent) => {
                 console.log('effect ' + e.key)
                setText(text + e.key)
            }
            window.addEventListener('keyup', keyHandler)
            return (() => {
                window.removeEventListener('keyup', keyHandler)
            })
        },
        [text])
    return <>
        {text}
    </>
}