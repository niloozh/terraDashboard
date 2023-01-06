import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import Icon from '@/baseComponents/Icon';
import PageContainer from '@/components/PageContainer';
import DevelopmentCharts from '@/components/DevelopmentCharts';

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
            <Icon type="development" color="black" scale={1.5} className="mr3" />
            Development
          </Div>
          <DevelopmentCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
