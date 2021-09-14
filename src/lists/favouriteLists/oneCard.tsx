import React from 'react';

import {database} from './database';
import Card from '../../components/Cards';

function OneCardFavouriteList() {
  const [item] = database;
  return <Card {...item} />;
}

export default OneCardFavouriteList;
