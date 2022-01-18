import { ReactNode } from 'react';

import { Text, TextInputProps, TextInput } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps  {
  children: ReactNode;
}

function Input({ children }: InputProps) {
  return (
    <Container>
      <Text>Input</Text>
      {children}
    </Container>
  );
};

export default Input;
