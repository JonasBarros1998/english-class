import React from 'react';

import {database} from './database';
import Card from '../../components/Cards';

function OneCard() {
  const [item] = database;
  return <Card {...item} />;
}

export default OneCard;
