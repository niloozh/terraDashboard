import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Div, Heading } from 'basedesign-iswad';

import Card from '@/baseComponents/Card';
import PublicRoute from '@/components/PublicRoute';
import Seo from '@/components/Seo';
import PageContainer from '@/components/PageContainer';

import useApiCalls from '@/hooks/useApiCalls';

import { GET_BAR_DATA_API_ROUTE } from '@/constants/apiRoutes';

import styles from './Index.module.scss';
import WalletCharts from '@/components/WalletCharts';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <WalletCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
