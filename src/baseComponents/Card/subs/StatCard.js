import React from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody } from 'basedesign-iswad';
import Image from 'next/image';

import styles from '../Card.module.scss';

const StatCard = ({ className, number, title, ...props }) => {
  return (
    <>
      <Card
        {...props}
        className={cx(
          'boxShadowType1 m1 bgThemeFour hover-bg-themeOne p2 br-rad-px-10 of-y-hidden of-x-hidden w-px-300 br-color-pink',
          styles.stat,
          className
        )}>
        <CardHeader className="textPink fs-px-28 f-b">{number}</CardHeader>
        <CardBody className="p1 height-px-50 flex flex--ai--center textWhite">{title}</CardBody>
      </Card>
    </>
  );
};

export default StatCard;
