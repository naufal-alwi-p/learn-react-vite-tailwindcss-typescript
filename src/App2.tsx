import React from 'react';
import CountButton from './components/CountButton';

interface obj {
  angka: number,
}

// style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces.
// You can use the style attribute when your styles depend on JavaScript variables.

function App() {
  let tampil: React.JSX.Element;
  const headingTwo: React.JSX.Element = (
    <h2 className='text-2xl font-bold ml-2 my-4'>
      Ini Header 2
    </h2>
  );

  const headingThree: React.JSX.Element = (
    <h3 className='text-xl font-bold ml-2 my-4'>
      Ini Header 3
    </h3>
  );

  const tes: obj = { angka: 7 };

  const data: {id: number, nama: string}[] = [
    {id: 1, nama: 'Andi'},
    {id: 2, nama: 'Rudi'},
    {id: 3, nama: 'Andre'}
  ];

  if (tes.angka < 10) {
    tampil = headingTwo;
  } else {
    tampil = headingThree;
  }

  const listData = data.map((obj) => {
    return (
      <li key={obj.id}>
        {obj.nama}
      </li>
    );
  });

  return (
    <>
      <h1 className="text-4xl font-bold my-4 ml-2">Belajar Framework Javascript</h1>
      <CountButton />
      <CountButton />
      <input type="text" name="teks" id="teks" placeholder={tes.angka.toString()} className='rounded-lg block my-4 ml-2' />

      {tampil}

      <ul className='list-outside list-disc mx-8'>
        {listData}
      </ul>

      <div style={{
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: '4px 12px'
      }} className='mx-2 my-4'>
        Hello
      </div>
    </>
  );
}

export default App;
