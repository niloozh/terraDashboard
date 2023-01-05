import React, { useState, useEffect, useMemo } from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';
import Image from 'next/image';

import Button from '@/baseComponents/Button';
import Table from '@/baseComponents/Table';
import { RICHLIST_DATA } from '@/constants/apiRoutes';
import useApiCalls from '@/hooks/useApiCalls';

import styles from '../SupplyChart.module.scss';

function RichListTable() {
  const [selectedData, setSelectedData] = useState([]);
  const [getDataReq, setGetDataReq] = useState(false);
  const { data, error } = useApiCalls({
    sendReq: getDataReq,
    setSendReq: setGetDataReq,
    method: 'GET',
    url: RICHLIST_DATA
  });
  const headLines = [
    {
      value: 'user',
      display: 'User',
      width: 550,
      hasSearch: true,
      isSortable: false
    },
    {
      value: 'balance',
      display: 'Balance (Luna)',
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
          balance: {
            value: d['BALANCE'],
            display: <Div className="fs-px-12">{d['BALANCE']} </Div>
          },
          user: { value: d['USER'], display: <Div className="fs-px-12">{d['USER']} </Div> }
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
        className={cx('p1 w-per-100 bgThemeOne br-rad-px-10 mt1 flex--wrap of-x-auto scrollType1')}>
        <Div className="m1 textWhite fs-px-20 f-b"> Rich List Table</Div>
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
        {/* <Button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</Button> */}
      </Div>
    </>
  );
}

export default RichListTable;
