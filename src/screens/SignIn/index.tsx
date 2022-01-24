import React from 'react';
import { Text } from 'react-native';

import { Input } from '@fastfood/components/Input';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input placeholder="Senha" type="secondary" secureTextEntry />
    </Container>
  );
};

export default SignIn;
