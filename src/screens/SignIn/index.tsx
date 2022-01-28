import React from 'react';
import { Text } from 'react-native';

import { Input } from '@fastfood/components/Input';
import { Button } from '@fastfood/components/Button';

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

      <Button title="Entrar" type="secondary" />
    </Container>
  );
};

export default SignIn;
