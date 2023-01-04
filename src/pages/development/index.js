import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';
import DevelopmentCharts from '@/components/DevelopmentCharts';

import styles from './Index.module.scss';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <DevelopmentCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
