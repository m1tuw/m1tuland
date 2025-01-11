import React from 'react';
import HeaderButton from './model/headerButtons';
import { HeaderLogo } from './model/headerButtons'
import { LeftHeaderDeco } from './model/headerButtons';
import { RightHeaderDeco } from './model/headerButtons';
import MainContent from './model/mainContents';
import { LeftContent, RightContent } from './model/mainContents';

// main app component
export default function App() {
  return (
    <>
      <div className="wallpaper"></div>
      <div className="container">
        <div className="header-container">
          <LeftHeaderDeco />
          <HeaderButton text="Projects" redirectLink="projects" />
          <HeaderButton text="Socials" redirectLink="social" />
          <HeaderButton text="About Me" redirectLink="aboutme" />
          <HeaderButton text="Extra" redirectLink="extra" />
          <HeaderButton text="Blog" redirectLink="blog" />
          <RightHeaderDeco />
        </div>

        <div className="contents">
          <LeftContent />
          <MainContent />
          <RightContent />
        </div>
      </div>
    </>
  );
}