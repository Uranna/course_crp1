import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Data } from './types';

function App() {
  const [data, setData] = useState<Array<Data>>();

  useEffect(() => {
    fetch('https://lk.directum.ru/mocks/dev/query/cats.json')
      .then(response => response.json())
      .then(setData)
  }, []);

  return (
    <main className='min-h-screen'>
      <div className="wrapper">
        <h1 className='header'>Практическое задание 3.2.</h1>
        {data
          ? (
            <div className='cards__wrapper'>
              {data.map(item => (
                <Card
                  key={item.id}
                  title={item.name}
                  gender={item.gender}
                  content={[`${item.gender} породы ${item.breed}. ${item.age}`, item.info]}
                  badges={[item.breed, item.gender]}
                  imageSrc={item.photo}
                />
              ))}
            </div>
          )
          : (
            <p>Нет данных для отображения</p>
          )}
      </div>
    </main>
  )
}

export default App
