
import { useLoaderData } from 'react-router-dom'
import './App.css'
import TeaCard from './components/TeaCard';
import { useState } from 'react';

function App() {
  const loadedteas = useLoaderData();
  const [teas, setTeas] = useState(loadedteas);

  return (
    <div className='m-16'>
      <h1 className='text-5xl text-center pb-7 font-bold'>Tea shop {teas.length}</h1>
      <div className='grid md:grid-cols-2 gap-6'>
        {
          teas.map(tea => <TeaCard
            key={tea._id}
            tea={tea}
            setTeas={setTeas}
            teas={teas}
          ></TeaCard>)
        }
      </div>
    </div>
  )
}

export default App
