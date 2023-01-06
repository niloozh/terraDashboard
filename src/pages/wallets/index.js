import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import useApiCalls from '@/hooks/useApiCalls';
import Icon from '@/baseComponents/Icon';
import WalletCharts from '@/components/WalletCharts';
import { GET_BAR_DATA_API_ROUTE } from '@/constants/apiRoutes';

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
            <Icon type="wallet" color="black" scale={1.5} className="mr3" />
            Wallets
          </Div>
          <WalletCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
