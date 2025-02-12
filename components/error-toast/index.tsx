import * as React from "react";
import { Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "@/state/errors/actions";
import { getErrorMessage } from "@/state/errors/selectors";

import { ToastContainer, ToastText } from "./styles";

export const ErrorToast = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(getErrorMessage);
  const fadeAnimation = new Animated.Value(0);

  React.useEffect(() => {
    if (errorMessage) {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => dispatch(clearError()));
      }, 3000);
    }
  }, [errorMessage]);

  if (!errorMessage) return null;

  return (
    <ToastContainer style={{ opacity: fadeAnimation }}>
      <ToastText>{errorMessage}</ToastText>
    </ToastContainer>
  );
};
