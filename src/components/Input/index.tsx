import { ReactNode } from 'react';

import { Text, TextInputProps, TextInput } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps  {
}

export const Input:React.FC:<InputProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Text>Input</Text>
    </Container>
  );
};
