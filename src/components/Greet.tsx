import React from 'react';
type greetProps = {
    name : string
}

export default function Greet({name}:greetProps) {
  return (
    <div>
      <h2>Hello {name}, you have 10 unread messages</h2>
    </div>
  );
}
