import { PathConfigMap } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { generateLinkingConfig } from "../../utils/navigation";
import {
  HomeDrawer,
  linkingConfig as homeLinks,
  HomeDrawerParams,
} from "./home/index.drawer";
import { TasksGroup, linkingConfig as tasksLinks } from "./tasks/tasks.group";

const Stack = createNativeStackNavigator();

export const linkingConfig = generateLinkingConfig({
  paths: {
    Home: {
      path: "home",
      screens: homeLinks as PathConfigMap<HomeDrawerParams>,
    },
    ...tasksLinks,
  },
});

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeDrawer} />

      {TasksGroup()}
    </Stack.Navigator>
  );
}
