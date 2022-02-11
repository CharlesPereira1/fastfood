import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Input } from '@fastfood/components/Input';
import { Button } from '@fastfood/components/Button';

import brandImg from '@fastfood/assets/brand.png';

import {
  Brand,
  Container,
  Content,
  Title,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input placeholder="Senha" type="secondary" secureTextEntry />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
