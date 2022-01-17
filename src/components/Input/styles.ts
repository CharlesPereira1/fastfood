import { TextInput } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  type: 'primary' | 'secundary';
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextcolor:
    type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50,
}))<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0px;
`;
