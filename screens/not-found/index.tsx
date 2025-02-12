import { Link, Stack } from "expo-router";

import { Container, Title, LinkText } from "./styles";

export const NotFound = () => {
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
};
