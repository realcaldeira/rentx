import React from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  Title
} from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: ()=> void;
    enable?: boolean;
}

export function Button({
    title,
    color,
    onPress,
    enable = true
}:Props){

  const theme = useTheme();
  return (
    <Container 
      color={color ? color : theme.colors.main} 
      onPress={onPress}
      enable={false}
      style={{ opacity: enable ? 1 : .5}}
      >
        <Title>{title}</Title>

    </Container>
   );
}