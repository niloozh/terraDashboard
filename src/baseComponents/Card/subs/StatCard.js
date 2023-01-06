import React from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody } from 'basedesign-iswad';
import Image from 'next/image';

import Anchor from '@/baseComponents/Anchor';
import Icon from '@/baseComponents/Icon';

import styles from '../Card.module.scss';

const StatCard = ({ className, number, title, to, ...props }) => {
  return (
    <>
      <Card
        {...props}
        className={cx(
          'boxShadowType1 m1 bgThemeFour hover-bg-themeOne p2 br-rad-px-10 of-y-hidden of-x-hidden w-px-300 br-color-pink',
          styles.stat,
          className
        )}>
        <CardHeader className="textPink fs-px-28 f-b">
          <Div type="flex" vAlign="start">
            <Div>{number}</Div>
            <Div type="flex" className="w-per-100 mt2" hAlign="end">
              <Anchor to={to} internal={false}>
                <Icon type="code" color="white" className={'mouse-hand'} />
              </Anchor>
            </Div>
          </Div>
        </CardHeader>
        <CardBody className="p1 height-px-50 flex flex--ai--center textWhite">{title}</CardBody>
      </Card>
    </>
  );
};

export default StatCard;
