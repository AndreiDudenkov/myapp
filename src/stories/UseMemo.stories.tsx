import React, {useMemo, useState} from 'react';

export  default {
    title: 'useMemo'
}

export const useMemoDifficultExample = () => {
    const [a, setA] = useState(2)
    const [b, setB] = useState(3)

    let resultA = a
    let resultB = b

    useMemo( () => { for (let i = 1; i < a; i++) {
        let j = 0
        while(j<100000000){
            j = j+1
            const testValue = Math.random()
        }
        resultA *=i
    }
    }, [a])

    for (let i = 1; i < b; i++) {
        resultB *=i
    }

    return <>
        <input type="text" value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <div>Result A: {resultA}</div>
        <div>Result B: {resultB}</div>
    </>

}


    const NewMessageCounter = (props: { count: number }) =>
    {
        return <div>{props.count}</div>
    }

    const UsersSecret = (props: { users: string[] }) => {
        console.log('Update Users')
        return <div>
            {props.users.map((u, i) =>
                <div key={i}>{u}</div>)}
        </div>
    }

    const Users = React.memo(UsersSecret)

    export const useMemoHelpsReactMemoExample = () => {
        console.log('useMemoHelps')
        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(['Andrei', 'Dimych'])



        let filteredUsers = useMemo(()=>{
            return  users.filter(el=>el.toLowerCase().indexOf('a')>-1)
        },[users])

       const addUser = () => {
         const  newUser = [...users, "Jona "+ new Date().getTime()]
           setUsers(newUser)
       }
        return <>
            <button onClick={() => setCounter(counter + 1)}>Count +</button>
            <button onClick={addUser}>addUser</button>
            <NewMessageCounter count={counter}/>
            <Users users={filteredUsers}/>
        </>
    }
