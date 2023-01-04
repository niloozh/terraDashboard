import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import styles from './Index.module.scss';
import SupplyChart from '@/components/SupplyChart';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <SupplyChart />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
