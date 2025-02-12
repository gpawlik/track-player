import * as React from "react";

import { Container, Icon, Message, SubMessage } from "./styles";
import { useTheme } from "styled-components/native";

export const NoTracks = () => {
  const theme = useTheme();

  return (
    <Container>
      <Icon
        name="musical-notes-outline"
        size={50}
        color={theme.colors.gray900}
      />
      <Message>No tracks available</Message>
      <SubMessage>
        Add some songs to your playlist and start listening!
      </SubMessage>
    </Container>
  );
};
