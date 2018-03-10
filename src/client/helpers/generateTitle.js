import React from 'react';
import { Helmet } from 'react-helmet';
import { TITLES } from '../consts';

const createTitle = (name) => {
  const titleHead = name && TITLES[name] ? TITLES[name] : '';
  const titleTail = titleHead ? ` | ${TITLES.PortalTitle}` : TITLES.PortalTitle;

  return ''.concat(titleHead, titleTail);
};

const generateTitle = componentDescription => (
  <Helmet>
    <title>{createTitle(componentDescription)}</title>
  </Helmet>
);

export default generateTitle;
