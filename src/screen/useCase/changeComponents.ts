//changeAttComponents = change attributes components
function changeAttComponents(componentName: 'privateList' | 'favouriteList') {
  if (componentName === 'privateList') {
    return {
      style: {
        colorBorderBtnMyList: '#A5B4FC',
        colorBorderBtnfavouritList: 'transparent',
      },
      component: {
        loadComponentPrivateList: true,
        loadCompoentFavouriteList: false,
      },
    };
  }

  return {
    style: {
      colorBorderBtnMyList: 'transparent',
      colorBorderBtnfavouritList: '#A5B4FC',
    },
    component: {
      loadComponentPrivateList: false,
      loadCompoentFavouriteList: true,
    },
  };
}

export {changeAttComponents};
