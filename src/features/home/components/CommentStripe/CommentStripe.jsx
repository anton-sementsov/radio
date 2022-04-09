import React, { useEffect, useState } from 'react';

import { airtableDB } from '@radio/lib/api';

import styles from './CommentStripe.module.scss';

export const CommentStripe = ({}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    airtableDB('messages')
      .select()
      .eachPage((records, fetchNextPage) => {
        const result = records.map(({ fields }) => ({
          text: fields?.text,
          emoji: fields?.emoji,
        }));
        setMessages(result);
        fetchNextPage();
      });
  }, []);

  if (!messages) return <></>;

  return (
    <div className={styles.marquee}>
      <span>
        {messages.map((message, index) => (
          <div key={index} className={styles.stripeContainer}>
            <div className={styles.emoji}>{message?.emoji}</div>
            <div className={styles.text}>{message?.text?.toUpperCase()}</div>
            <div className={styles.textInvis}>
              {message?.text?.toUpperCase()}
            </div>
          </div>
        ))}
      </span>
    </div>
  );
};
