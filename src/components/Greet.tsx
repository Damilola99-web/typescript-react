import React from 'react';
type greetProps = {
    name : string,
    count: number
}

export default function Greet({name, count}:greetProps) {
  return (
    <div>
      <h2>Hello {name}, you have {count} unread messages</h2>
    </div>
  );
}
