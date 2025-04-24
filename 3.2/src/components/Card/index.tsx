import React from 'react';
import { Card as UICard } from 'antd';
import { CardProps } from './types';
import { Button } from '../Button';
import { Badge } from './components/Badge';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Cover } from './components/Cover';

const { Meta } = UICard;

export const Card: React.FC<CardProps> = props => {
  const actions: Array<React.ReactNode> = [
    <Button variant='primary'>Забрать домой</Button>,
    <Button>Забрать домой</Button>,
  ];

  return (
    <UICard
      actions={actions}
      className='flex flex-col max-w-md w-full'
      classNames={{
        cover: 'max-h-60 overflow-hidden',
        body: 'grow',
        actions: 'justify-end',
      }}
      cover={<Cover alt={props.title} imageSrc={props.imageSrc} />}
      extra={props.badges?.map(badge => <Badge>{badge}</Badge>)}
    >
      <Meta
        title={<Title>{props.title}</Title>}
        description={<Description content={props.content}/>}
      />
    </UICard>
  )
};
