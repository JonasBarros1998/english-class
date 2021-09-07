import {changeAttComponents} from '../../../../src/screen/useCase/changeComponents';

describe('test components change', function () {
  test(`if sending param privateList, should return a objeto with 
  style components and what component will loading`, function () {
    const mockObj = {
      style: {
        colorBorderBtnMyList: '#A5B4FC',
        colorBorderBtnfavouritList: 'transparent',
      },
      component: {
        loadComponentPrivateList: true,
        loadCompoentFavouriteList: false,
      },
    };

    expect(changeAttComponents('privateList')).toEqual(mockObj);
  });

  test(`if sending param favouriteList, should return a objeto with 
    style components and what component will loading`, function () {
    const mockObj = {
      style: {
        colorBorderBtnMyList: 'transparent',
        colorBorderBtnfavouritList: '#A5B4FC',
      },
      component: {
        loadComponentPrivateList: false,
        loadCompoentFavouriteList: true,
      },
    };

    expect(changeAttComponents('favouriteList')).toEqual(mockObj);
  });
});
