import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useCallbackUseMemo'
}

export const useMemoDifficultExample = () => {
    const [a, setA] = useState(2)
    const [b, setB] = useState(3)

    let resultA = a
    let resultB = b

    useMemo(() => {
        for (let i = 1; i < a; i++) {
            let j = 0
            while (j < 10000) {
                j = j + 1
                const testValue = Math.random()
            }
            resultA *= i
        }
    }, [a])

    for (let i = 1; i < b; i++) {
        resultB *= i
    }

    return <>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>Result A: {resultA}</div>
        <div>Result B: {resultB}</div>
    </>

}










const NewMessageCounter = (props: { count: number }) => {
    console.log('render count')
    return <div>{props.count}</div>
}

const MessagesCount = React.memo(NewMessageCounter)

const UsersSecret = (props: { users: string[] }) => {
    console.log('Update Users')
    return <div>
        {props.users.map((u, i) =>
            <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const useMemoHelpsReactMemoExample = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Andrei', 'Dimych'])


    let filteredUsers = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Jona ' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>Count +</button>
        <button onClick={addUser}>addUser</button>
        <MessagesCount count={count}/>
        <Users users={filteredUsers}/>
    </>
}












const NewBooksCounter = (props: { count: number }) => {
    console.log('render count')
    return <div>{props.count}</div>
}

const BooksCount = React.memo(NewBooksCounter)

const BooksSecret = (props: { addBook: ()=>void }) => {
    console.log('Update Books')
    return (
        <button onClick={props.addBook}>addBook</button>
    )
}

const Books = React.memo(BooksSecret)


export const useCallbackExample = () => {
    console.log('main component')

    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['JS', 'REACT'])


    // let filteredBooks = useMemo(()=>{
    //     return  books.filter(el=>el.toLowerCase().indexOf('a')>-1)
    // },[books])

     const memoizedCallback = useCallback(() => {
         const newBooks = [...books, 'HTML ' + new Date().getTime()]
         setBooks(newBooks)
     }, [books])
    // const addBook = ()=> {
    //     const newBooks = [...books, 'HTML ' + new Date().getTime()]
    //     setBooks(newBooks)
    // }


    return <>
        <button onClick={() => setCount(count + 1)}>Count +</button>

        <BooksCount count={count}/>
        <Books addBook={memoizedCallback}/>
    </>
}
