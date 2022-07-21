import React, { useEffect, useState } from 'react';

type greetProps = {
    name : string,
    count: number,
    style: React.CSSProperties
}
type user = {
  name : string,
  email: string
}

export default function Greet({name, count, style}:greetProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<null | user>(null)
  useEffect(()=>{
    isLoggedIn && setUser({
      name: 'korede',
      email : 'rasheedw622@gmail.com'
    })

    !isLoggedIn && setUser(null)
    
  }, [isLoggedIn])
  return (
    <div>
      <h2 style={style}>Hello {name}, you have {count} unread messages</h2>
      {isLoggedIn && <button onClick={()=>setIsLoggedIn(false)}>logout</button> }
      {!isLoggedIn && <button onClick={()=> setIsLoggedIn(true)}>login</button> }
      <p>username: {user?.name}</p>
      <p>email: {user?.email}</p>

    </div>
  );
}
