import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AnimeListItem from './AnimeListItem'

import contentData from '../utils/contentData';

const Content = () => (
  <div className="next-steps my-5" data-testid="content">
    <AnimeListItem />
  </div>
);

export default Content;
