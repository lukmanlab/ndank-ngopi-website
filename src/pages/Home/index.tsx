/* eslint-disable react/require-default-props */
import { ReactElement } from 'react';
import Page from '../Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from './Body';

function Home(): ReactElement {
  return <Page header={<Header />} body={<Body />} footer={<Footer />} />;
}

export default Home;
