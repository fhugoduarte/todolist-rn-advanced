import { createDrawerNavigator } from "@react-navigation/drawer";
import { PathConfigMap } from "@react-navigation/native";
import React from "react";

import { generateLinkingConfig } from "../../../utils/navigation";
import {
  TagsStack,
  linkingConfig as tagsLinks,
  TagsStackParams,
} from "../tags/index.stack";
import {
  TasksTopTab,
  linkingConfig as tasksLinks,
  TasksTopTabParams,
} from "../tasks/index.top";

export type HomeDrawerParams = {
  Tasks?: {
    screen?: TasksTopTabParams;
  };
  Tags?: {
    screen?: TagsStackParams;
  };
};

export const linkingConfig = generateLinkingConfig<HomeDrawerParams>({
  paths: {
    Tasks: {
      path: "tasks",
      screens: tasksLinks as PathConfigMap<HomeDrawerParams>,
    },
    Tags: {
      path: "tags",
      screens: tagsLinks as PathConfigMap<HomeDrawerParams>,
    },
  },
});

const Drawer = createDrawerNavigator<HomeDrawerParams>();

export function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tasks" component={TasksTopTab} />
      <Drawer.Screen name="Tags" component={TagsStack} />
    </Drawer.Navigator>
  );
}
