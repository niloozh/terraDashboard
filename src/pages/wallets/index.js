import React from 'react';
import cx from 'classnames';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';
import LineChart from '@/baseComponents/LineChart';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Heading className="textWhite mb2" type={3}>
            Wallets
          </Heading>
          <Div type="flex">
            <Card type="stat" number={230} title="Number of active wallets" className="m1" />
            <Card type="stat" number={230} title="Number of active wallets" className="m1" />
          </Div>
          <LineChart />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
