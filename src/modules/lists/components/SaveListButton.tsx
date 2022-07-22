import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SaveListButton() {
  const theme = useTheme() as any;

  return (
    <View style={{
      paddingRight: 10
    }}>
      <Icon name="done" size={30} color={theme.colors.colorIconSecondary} />
    </View>
  );
}
