import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
// import g from '../images/icon.png';
import '../styles/global.scss';

import ButtonOrange from '../components/button';
import BenefitItem from '../components/benefit-item';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <header>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
        </ul>
        <div>1-Space</div>
        <ul>
          <li>SERVICES</li>
          <li>SPACES</li>
          <li>EVENTS</li>
        </ul>
      </header>
      <main>
        {/* <ButtonOrange text='Schedule Visit' type='fill' />
        <ButtonOrange text='Schedule Visit' type='outline' classes='ml-4' /> */}
        {/* <div className='w-[500px]'>
          <BenefitItem
            icon={g}
            alt=''
            heading='Community Events'
            text='Allowing cost savings and convenience through the use of common infrastructures.'
          />
        </div> */}
      </main>
      <footer>
        <div className='text'>
          <h2>1-Space</h2>
          <p>
            Men cannot not live by exchanging articles, but producing them. They
            live by work not trade.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>Global Localities</li>
            <li>Missions</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div>
          <h3>Partnership</h3>
          <ul>
            <li>Tasks</li>
            <li>Profile</li>
            <li>Events</li>
            <li>Services</li>
          </ul>
        </div>
        <div className='follow'>
          <h3>Follow us</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Freebies - Coworking Space</title>;

