import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { EditTagsScreen } from "../../../screens/app/tags/screens/EditTags";
import { NewTagsScreen } from "../../../screens/app/tags/screens/NewTags";
import { TagsListScreen } from "../../../screens/app/tags/screens/TagsList";
import { generateLinkingConfig } from "../../../utils/navigation";

export type TagsStackParams = {
  TagsList: undefined;
  NewTag: undefined;
  EditTag: {
    id: string;
  };
};

export const linkingConfig = generateLinkingConfig<TagsStackParams>({
  paths: {
    TagsList: "list",
    NewTag: "create",
    EditTag: "edit/:id",
  },
});

const Stack = createNativeStackNavigator<TagsStackParams>();

export function TagsStack() {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TagsList" component={TagsListScreen} />
      <Stack.Screen name="NewTag" component={NewTagsScreen} />
      <Stack.Screen name="EditTag" component={EditTagsScreen} />
    </Stack.Group>
  );
}
