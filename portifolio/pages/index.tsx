import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Typography from "@elton-okawa/typography";
import { Avatar } from "@elton-okawa/avatar";
import { Card } from "@elton-okawa/card";
import { Emoji } from "@elton-okawa/emoji";
import profilePicture from "../public/profile.jpg";
import { ContactLinks } from "../components/contact-links";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {renderPresentation()}
        {renderOtherPages()}
      </main>
    </>
  );
}

function renderPresentation() {
  return (
    <Card>
      <div className={styles.presentation}>
        <div className={styles.avatar}>
          <Avatar size="container">
            <Image alt="profile picture" src={profilePicture} />
          </Avatar>
        </div>
        <Typography variant="h5">
          Hello there! <Emoji label="waving">👋</Emoji>
        </Typography>
        <Typography variant="h3">
          {`I'm Elton Okawa`} <Emoji label="nerd">🤓</Emoji>
        </Typography>
        <Typography variant="h6">
          A Full Stack Developer with working experience
        </Typography>
        <Typography variant="h6">
          in React, NodeJS and Google Cloud Platform
        </Typography>
        <ContactLinks />
      </div>
    </Card>
  );
}

function renderOtherPages() {
  return (
    <div className={styles.navigation}>
      {/* TODO eventually create this page */}
      {/* <Link href="/experience">
        <Card>
          <Typography variant="h3">
            <Emoji label="briefcase">💼</Emoji> Experience
          </Typography>
          <Typography>Read more about my professional experience</Typography>
        </Card>
      </Link> */}
      <Link href="/about">
        <Card>
          <Typography variant="h3">
            <Emoji label="info">🧐</Emoji> About
          </Typography>
          <Typography>Read more about this portifolio</Typography>
        </Card>
      </Link>
    </div>
  );
}
