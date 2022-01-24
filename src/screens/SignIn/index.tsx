import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface SignInProps {
  children: ReactNode;
}

function SignIn({ children }: SignInProps) {
  return (
    <Container>
      <Text>SignIn</Text>
      {children}
    </Container>
  );
};

export default SignIn;
