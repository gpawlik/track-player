import { Link, Stack } from "expo-router";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 12px;
`;

export const LinkText = styled.Text`
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-size: 12px;
  margin-top: 15px;
  padding-vertical: 15px;
`;

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Container>
        <Title>This screen doesn't exist.</Title>
        <Link href="/">
          <LinkText>Go to home screen!</LinkText>
        </Link>
      </Container>
    </>
  );
}
