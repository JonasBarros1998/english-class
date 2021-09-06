import React from 'react';

import {database} from './database';
import PrivateCards from '../../components/Cards/privateCards';

function OneCard() {
  const [item] = database;
  return <PrivateCards {...item} />;
}

export default OneCard;
