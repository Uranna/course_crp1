import React, { FC } from "react"
import styles from './card.module.css'
import { Badge, Box, Card as UICard, HStack, Image } from "@chakra-ui/react"
import { CardProps } from "./types"
import {Button} from "../Button"

export const Card: FC<CardProps> = ({ title, gender, content, imageSrc, badges }) => (
    <UICard.Root className={styles.card}>
      <Image
        className={styles['card__img']}
        src={imageSrc}
        alt={title}
      />
      <Box className={styles['card__box']}>
        <UICard.Body className={styles['card__body']}>
          <UICard.Title
            as='h2'
            className={styles['card__title']}
          >
            {title}
          </UICard.Title>

          <UICard.Description as='div' className={styles['card__description']}>
            {content.map((text, index) => <p key={index}>{text}</p>)}
          </UICard.Description>

          {!!badges?.length && (
            <HStack className={styles['card__badge-wrapper']}>
              {badges.map((badge, index) => <Badge key={index} variant="solid" size='md'>{badge}</Badge>)}
            </HStack>
          )}
        </UICard.Body>
        
        <UICard.Footer className={styles['card__footer']}>
          <Button alertText={`${title} рад${gender === 'Кот' ? '' : 'a'} обрести дом!`}>Забрать домой</Button>
        </UICard.Footer>
      </Box>
    </UICard.Root>
  );

