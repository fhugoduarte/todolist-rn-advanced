import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";

import { TagsStackParams } from "../../../../../routes/app/tags/index.stack";

type Props = NativeStackScreenProps<TagsStackParams, "TagsList">;

export function TagsListScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
        TagsList Screen
      </Text>

      <Button title="NEW TAG" onPress={() => navigation.navigate("NewTag")} />
    </View>
  );
}
