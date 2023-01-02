import React from 'react';
import cx from 'classnames';
import { Div } from 'basedesign-iswad';

import StatCard from './subs/StatCard';
import ProjectCard from './subs/ProjectCard';

import styles from './Card.module.scss';
import NavCard from './subs/NavCard';

const Card = ({ type, ...props }) => {
  return (
    <>
      {type === 'stat' && <StatCard {...props} />}
      {type === 'project' && <ProjectCard {...props} />}
      {type === 'nav' && <NavCard {...props} />}
    </>
  );
};

export default Card;
