import React from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter } from 'basedesign-iswad';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../Card.module.scss';
import Icon from '@/baseComponents/Icon';

const NavCard = ({ text, subText, url, iconType, className, ...props }) => {
  const router = useRouter();
  return (
    <>
      <Div
        direction="vertical"
        {...props}
        className={cx(
          'w-px-250 pl2 pr2 br-rad-px-10 br-all-solid-1 flex flex--jc--center of-y-hidden of-x-hidden mouse-hand',
          className,
          styles.hover,
          styles.navMain
        )}
        onClick={() => router.push(url)}>
        <Div type="flex" vAlign="center" className="textWhite fs-px-25 flex w-per-100 height-px-50">
          <Icon type={iconType} color="white" className="mr2" scale={1.5} />
          <Div>{text}</Div>

          <Div className="">
            <Icon type="angleRight" color="white" className="ml3" />
          </Div>
        </Div>
        <Div className="fs-px-14 textWhite height-px-70">{subText}</Div>
      </Div>
    </>
  );
};

export default NavCard;
