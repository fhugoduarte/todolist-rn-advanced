import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignInScreen } from "../../screens/auth/screens/SignIn";
import { SignUpScreen } from "../../screens/auth/screens/SignUp";
import { generateLinkingConfig } from "../../utils/navigation";

export type AuthStackParams = {
  SignIn: undefined;
  SignUp: undefined;
};

export const linkingConfig = generateLinkingConfig<AuthStackParams>({
  baseUrl: "auth",
  paths: {
    SignIn: "signIn",
    SignUp: "signUp",
  },
});

const Stack = createNativeStackNavigator<AuthStackParams>();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
