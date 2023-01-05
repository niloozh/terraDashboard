import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <Div className={cx(styles.footerContainer)}>
        <Div
          type="flex"
          hAlign="center"
          vAlign="center"
          className={cx('textWhite bgThemeOne fs-px-14 p1', styles.copyRightContainer)}>
          © 2023 | Powered by
          <a href="http://flipsidecrypto.xyz" className={cx('flex flex--jc--center ml1 textWhite')}>
            Flipsidecrypto
          </a>
          ,
          <a
            href="https://metricsdao.xyz/"
            className={cx('flex mr1 flex--jc--center ml1 textWhite')}>
            MetricsDao
          </a>
          &
          <a
            href="https://github.com/niloozh"
            className={cx('flex mr1 flex--jc--center ml1 textWhite')}>
            Niloozh
          </a>
        </Div>
      </Div>
    </>
  );
};

export default Footer;
