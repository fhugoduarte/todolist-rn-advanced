import React from "react";
import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackParams } from "../../../../routes/auth/index.stack";

type Props = NativeStackScreenProps<AuthStackParams, "SignIn">;

export function SignInScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        SignIn Screen
      </Text>

      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}
