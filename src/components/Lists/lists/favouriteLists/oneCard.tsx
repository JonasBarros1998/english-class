import React from 'react';

import {database} from './database';
import Card from '../../../Cards';

function OneCardFavouriteList() {
  const [item] = database;
  return <Card {...item} />;
}

export default OneCardFavouriteList;
