import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Input } from '@fastfood/components/Input';
import { Button } from '@fastfood/components/Button';

import { Container, Content, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input placeholder="Senha" type="secondary" secureTextEntry />

          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
