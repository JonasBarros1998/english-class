import React from 'react';

import CreateLists from '@components/Save/CreateLists';

function CreateListsScreen(props: any) {
  return <CreateLists routes={props.navigation} />;
}

export default CreateListsScreen;
