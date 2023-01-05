import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import TransactionCharts from '@/components/TransactionCharts';
import Close from '@/baseComponents/Close';
import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Div showIn={['xs', 'sm']} className="bgPink textWhite p1 mb1 br-rad-px-10">
            If you are using a phone for having a better view of charts rotate the screen to
            landscape and then refresh the page.
          </Div>
          <TransactionCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
