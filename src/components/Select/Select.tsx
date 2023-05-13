import React, {useState, KeyboardEvent, useEffect} from 'react';
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

    const toggleItems = (value: any) => {
        setActive(!active)
        setHoveredElementValue(value)
    }
    const itemClickHandler = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentEl = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentEl) {
                        props.onChange(pretendentEl.value)
                        return
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter'){
            setActive(!active)
        }
    }

        return (<>
                <div className={styles.select} tabIndex={0} onKeyUp={onKeyUpHandler}>
                    <span className={styles.main}
                          onClick={() => toggleItems(selectedItem && selectedItem.value)}>{selectedItem && selectedItem.title}</span>


                    {active &&
                        <div className={styles.items}>
                            {props.items.map(el =>
                                <div
                                    onMouseEnter={() => setHoveredElementValue(el.value)}
                                    className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}
                                    onClick={() => itemClickHandler(el.value)}
                                    key={el.value}>
                                    {el.title}
                                </div>)}
                        </div>}
                </div>
            </>
        )
    }
