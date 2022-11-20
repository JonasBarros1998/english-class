import React, {useMemo, useState} from 'react';
import { Paragraph, Dialog, Portal, Button, useTheme } from 'react-native-paper';
import {styles} from './styles/info'

export default function Info(props: {visible: boolean}) {

  const [visible, setVisible] = useState(false);

  const {colors} = useTheme();
  const styleComponent = styles(colors);

  const onVisible = () => {
    setVisible(props.visible);
    return props.visible;
  }

  useMemo(() => {
    return onVisible();
  }, [props.visible]);

  const hideDialog = () => setVisible(false);

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={{...styleComponent.info}}>
          <Dialog.Content> 
            <Paragraph>Lista atualizada!</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  )
}