import React, { useState, useEffect } from 'react'
const URL = "https://api.additivasia.io/api/v1/assignment/employees";

export default function UserCard({name, depth}) {
    const [directSubs, setDirectSubs] = useState([])

    useEffect(() => {
        const getDirectSubs = async () => {
            const data = await fetch(URL + `/${name}`).then(res => {
              return res.json()
            });
            const directSubs = data[1] && data[1]['direct-subordinates'];
            setDirectSubs(directSubs ? directSubs : [])
          }
          getDirectSubs();
    }, [name])

    return (
        <div style={{marginLeft: 10*depth + 'px'}}>
            {name} 
            {directSubs.map(name => <UserCard name={name} depth={depth + 1} key={name}/>)}
        </div>
    )
}
