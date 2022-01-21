import React from 'react';
import {Fab, Box} from 'native-base';
import IconAdd from '@components/Svgs/Add';

function CreateCardButton(props: any) {
  function newCard() {
    props.updateCard();
  }

  return (
    <Box>
      <Fab
        placement={'bottom-right'}
        renderInPortal={false}
        bottom={-25}
        bg="#312E81"
        position="absolute"
        size="sm"
        variant="unstyled"
        marginBottom={'10'}
        onPress={() => newCard()}
        icon={<IconAdd />}
      />
    </Box>
  );
}

export default CreateCardButton;
