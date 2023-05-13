import React, {useState} from 'react';
import styles from './Select.module.css';


type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)
    const itemClickHandler = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }


    return (<>
            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                _ _ _ _ _ _ _ _ _ _

                {active &&
                    <div className={styles.items}>
                        {props.items.map(el =>
                            <div
                                onMouseEnter={()=>setHoveredElementValue(el.value)}
                                className={styles.item + " " +(hoveredItem===el?styles.selected:'')}
                                onClick={()=>itemClickHandler(el.value)}
                                 key={el.value}>
                                {el.title}
                            </div>)}
                    </div>}
            </div>
        </>
    )
}
