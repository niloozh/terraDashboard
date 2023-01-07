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
import Anchor from '@/baseComponents/Anchor';

const Index = () => {
  return (
    <PublicRoute>
      <Seo>
        <PageContainer>
          <Div
            type="flex"
            hAlign="start"
            vAlign="center"
            className=" br-rad-px-10 f-b br-color-pink text-center textSilver pr3 pl3">
            <Icon type="wallet" color="silver" scale={1.5} className="mr3" />
            Wallets
          </Div>
          <Div className="ml6 pl2 fs-px-14 textSilver mb3">
            <Anchor to={'/'} anchorType={2}>
              Home
            </Anchor>
            {'>'}

            <Anchor to={'/wallets'} anchorType={2}>
              {' '}
              Wallets
            </Anchor>
          </Div>
          <Div showIn={['xs', 'sm']} className="bgPink textThemeFour fs-px-14 p1 mb1 br-rad-px-10">
            In order to have a better view of charts on phone devices rotate the screen to landscape
            and then refresh the page.
          </Div>
          <WalletCharts />
        </PageContainer>
      </Seo>
    </PublicRoute>
  );
};

export default Index;
