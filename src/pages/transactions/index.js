import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import TransactionCharts from '@/components/TransactionCharts';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <TransactionCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
