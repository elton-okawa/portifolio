import React from "react";
import { Message } from "@elton-okawa/websocket-chat";
import { Flex } from "@elton-okawa/flex";
import { Avatar } from "@elton-okawa/avatar";
import { mergeClassNames } from "@elton-okawa/commons";
import Image from "next/image";
import profilePicture from "../../public/profile.jpg";
import Typography from "@elton-okawa/typography";
import styles from "./styles.module.css";

interface MessageItemProps {
  message: Message;
  owner: boolean;
}

export default function MessageItem({ message, owner }: MessageItemProps) {
  const direction = owner ? 'row' : 'row-reverse';

  return (
    <Flex alignItems="center" direction={direction}>
      <Avatar size='large'>
        <Image alt="profile picture" src={profilePicture} />
      </Avatar>
      <div className={styles.container}>
        <span className={styles.message}>
          <Typography>{message.content}</Typography>
        </span>
      </div>
    </Flex>
  );
}
