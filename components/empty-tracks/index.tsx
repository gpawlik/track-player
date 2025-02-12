import * as React from "react";

import { Colors } from "@/constants/Colors";

import { Container, Icon, Message, SubMessage } from "./styles";

export const NoTracks = () => {
  return (
    <Container>
      <Icon name="musical-notes-outline" size={50} color={Colors.light.text} />
      <Message>No tracks available</Message>
      <SubMessage>
        Add some songs to your playlist and start listening!
      </SubMessage>
    </Container>
  );
};
