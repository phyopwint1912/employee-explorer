import React, { useContext } from 'react'
import { Context } from "../context/index";

export default function UserCard({name, depth}) {

    const appContext = useContext(Context);
    const { directSubs } = appContext;    
    
    return (
        <div style={{marginLeft: 10*depth + 'px'}}>
            {name} 
            {directSubs.map(name => <UserCard name={name} depth={depth + 1} key={name}/>)}
        </div>
    )
}
