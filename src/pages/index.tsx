import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import {
  FooterElement,
  HeaderElement,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from '../components';

import '../styles/global.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <HeaderElement />
      <main className='bg-transparent child:px-14 xl:child:px-20 2xl:child:px-44  lg:overflow-auto overflow-hidde '>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
      <FooterElement />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Freebies - Coworking Space</title>;

