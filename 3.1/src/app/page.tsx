import React from 'react';
import { Data } from './types';
import { Card } from '../components/Card/Card';
import styles from './page.module.css';

export default async function Home() {
  const response = await fetch('https://lk.directum.ru/mocks/dev/query/cats.json');
  const data: Array<Data> = await response.json();

  return (
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Серверный компонент</h1>
        <div className={styles['cards__wrapper']}>
          {data.length
            ? data.map(item => (
              <Card
                key={item.id}
                title={item.name}
                gender={item.gender}
                content={[`${item.gender} породы ${item.breed}. ${item.age}`, item.info]}
                badges={[item.breed, item.gender]}
                imageSrc={item.photo}
              />
            ))
            : <p>Данных для отображения нет</p>
          }
        </div>
      </div>
  );
}