import React, { useState, useEffect } from 'react';
import { airtableDB } from '../../../../lib/api';
import styles from './CommentStripe.module.scss'

export const CommentStripe = ({ }) => {


    const [messages, setMessages] = useState([]);

    useEffect(() => {
        airtableDB("messages")
            .select()
            .eachPage((records, fetchNextPage) => {
                const result = records
                    .map(({ fields }) => ({
                        text: fields?.text,
                        emoji: fields?.emoji
                    }))
                setMessages(result);
                fetchNextPage();
            });
    }, []);

    if (!messages) return <></>;

    return (
        <div className={styles.marquee} >
            <span>
                 {/*eslint-disable-next-line react/jsx-key*/}
                {messages.map((message) => <div className={styles.stripeContainer}>
                    <div className={styles.emoji}>{message.emoji}</div>
                    <div className={styles.text}>{message.text.toUpperCase()}</div>
                    <div className={styles.textInvis}>{message.text.toUpperCase()}</div>
                </div>)}
            </span>
        </div>
    );
};