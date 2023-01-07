import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Image from 'next/image';

import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';
import { GET_TOP_10_USERS_BY_TX_CODE } from '@/constants/apiRoutes';
import Button from '@/baseComponents/Button';
import Table from '@/baseComponents/Table';
import { GET_TOP_10_USERS_BY_TX } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from '../WalletCharts.module.scss';

function Top10UsersByTX() {
  const [selectedData, setSelectedData] = useState([]);
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: GET_TOP_10_USERS_BY_TX
  });
  const headLines = [
    {
      value: 'user',
      display: 'User',
      width: 350,
      hasSearch: false,
      isSortable: false
    },
    {
      value: 'tx_count',
      display: 'Transactions Count',
      width: 200,
      hasSearch: false,
      isSortable: true
    },
    {
      value: 'fee',
      display: 'Amount of Fee Paid ',
      width: 200,
      hasSearch: false,
      isSortable: true
    }
  ];
  const tableData = useMemo(() => {
    if (data) {
      const localData = [];
      data.map((d) => {
        localData.push({
          tx_count: {
            value: d['TXS'],
            display: <Div className="fs-px-12">{d['TXS']} </Div>
          },
          fee: {
            value: d['FEES'],
            display: <Div className="fs-px-12">{d['FEES']} </Div>
          },
          user: { value: d['USER'], display: <Div className="fs-px-12">{d['USERS']} </Div> }
        });
      });
      return localData;
    } else {
      return [];
    }
  }, [data]);

  useEffect(() => {
    setGetDataReq(true);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Div
        type="flex"
        direction="vertical"
        hAlign="center"
        vAlign="center"
        className={cx(
          'p1 w-per-100 bgThemeOne br-rad-px-10 mt1 mb1 flex--wrap of-x-auto scrollType1'
        )}>
        <Div type="flex" hAlign="end" className="w-per-100">
          <Anchor to={GET_TOP_10_USERS_BY_TX_CODE} internal={false}>
            <Icon type="code" color="white" className={'mouse-hand mr2 mt2'} />
          </Anchor>
        </Div>
        <Div className="m1 textWhite fs-px-20 f-b"> Top 10 Users By Transactions Table</Div>
        <Table
          headLines={headLines}
          data={tableData}
          // colWidth={400}
          // tableWidth={'2025px'}
          isSelectable={false}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          sortIconColors={{ ASC: 'green', DESC: 'red', REG: 'silver' }}
          rowsPerPage={10}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfShownPages={5}
        />
      </Div>
    </>
  );
}

export default Top10UsersByTX;
