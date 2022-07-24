import React, { useEffect, useState } from 'react';

function Index() {
  const [state, setState] = useState(false);
  const [temp, setTemp] = useState('');
  const [storeage, setStoreage] = useState('');
  const setStorage = () => {
    window.localStorage.setItem('test', temp)
    setState(!state)
  }

  let test: any;
  useEffect(() => {
    test = window.localStorage.getItem('test');
    setStoreage(test);
  },[state]);
  return (
    <>
      <div>{storeage}</div>
      <input type="text" onChange={(e) => setTemp(e.target.value)} />
      <button onClick={() => setStorage()}>setTemp</button>
    </>
  );
}

export default Index;
