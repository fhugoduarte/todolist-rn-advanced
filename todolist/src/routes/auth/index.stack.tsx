import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { StackHeader } from '~/components/StackHeader';
import { generateLinkingConfig } from '~/utils/navigation';

import { SignInScreen } from '~/screens/auth/SignIn';
import { SignUpScreen } from '~/screens/auth/SignUp';

export type AuthStackParams = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

export const linkingConfig = generateLinkingConfig<AuthStackParams>({
  baseUrl: 'auth',
  paths: {
    SignIn: 'signIn',
    SignUp: 'signUp',
  },
});

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <StackHeader {...props} />,
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Cadastrar',
        }}
      />
    </Stack.Navigator>
  );
}
