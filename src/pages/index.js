import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';
import Logout from '@/baseComponents/Logout';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo title="TerraDash">
        {/* <PageContainer pageIdentifier="home"> */}
        <Div
          className={cx('pos-fix pos-fix--lt height-vh-full w-per-100 bgBlue', styles.background)}
        />
        <Div
          type="flex"
          vAlign="end"
          hAlign="center"
          className="fs-px-32 f-b w-per-100 height-vh-oneThird text-center textWhite">
          TerraDash
        </Div>

        <Div type="flex" vAlign="end" hAlign="center" className="textWhite pt2">
          {' '}
          A dazzling dashboard full of analytic insights
        </Div>
        <Div type="flex" vAlign="end" hAlign="center" className="mt8 ">
          <Card
            type="nav"
            text="Transactions"
            subText="Get information about transactions on Terra by viewing charts."
            url="/transactions"
            className="m1"
          />
          <Card
            type="nav"
            text="Wallets"
            subText="Learn about the activity of wallets on Terra."
            url="/wallets"
            className="m1"
          />
          <Card
            type="nav"
            text="Development"
            subText="Dive into contract deployment and development on Terra."
            url="/development"
            className="m1"
          />
          <Card
            type="nav"
            text="Supply"
            subText="Examine token supply and staking activity on Terra."
            url="/supply"
            className="m1"
          />
        </Div>
        {/* <footer className="pos-fix ">hi</footer> */}
        {/* </PageContainer> */}
      </Seo>
    </PublicRoute>
  );
};

export default Index;
