import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

function Index(props: any) {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const dataTest = useSelector((state: any) => state.data);
  const dataNumber = useSelector((state: any) => state.number);

  const setStore = () => {
    dispatch({ type: 'set', data: { name: input, status: 'alone' } });
  };

  useEffect(() => {
    console.log(dataTest);
  }, [dataTest]);

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <h1>name : {dataTest.name}</h1>
      <input type="text" onChange={(event) => setInput(event.target.value)} />
      <button onClick={() => setStore()}>setStore</button>

      <h1>number : {dataNumber}</h1>
      <button onClick={() => dispatch({ type: 'set', number: dataNumber + 1 })}>
        Plus Number
      </button>
      <button onClick={() => dispatch({ type: 'set', number: dataNumber - 1 })}>
        Down Number
      </button>

      <div style={{ textAlign: 'center' }}>TEST</div>
      {props?.data?.map((items: any, idx: number) => {
        return (
          <div key={idx}>
            <h1>{items.name}</h1>
            <Image
              loader={myLoader}
              src={`${items?.image?.url}`}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps(context: any) {
  let data = await fetch('https://api.thecatapi.com/v1/breeds')
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  return {
    props: { data: data },
  };
}

export default Index;
