import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import TransactionCharts from '@/components/TransactionCharts';
import Close from '@/baseComponents/Close';
import Icon from '@/baseComponents/Icon';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Div
            type="flex"
            hAlign="start"
            vAlign="center"
            className="height-px-50 br-rad-px-10 bgPink br-color-pink text-center textBlack mb3 pr3 pl3">
            <Icon type="transaction" color="black" scale={1.5} className="mr3" />
            Transactions
          </Div>
          <Div showIn={['xs', 'sm']} className="bgPink textThemeFour fs-px-14 p1 mb1 br-rad-px-10">
            In order to have a better view of charts on phone devices rotate the screen to landscape
            and then refresh the page.
          </Div>
          <TransactionCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
