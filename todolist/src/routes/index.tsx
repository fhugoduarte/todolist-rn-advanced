import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { RootRoutes, linkingConfig } from "./_root.routes";

export function Routes() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ["todolist://todolist"],
        config: {
          screens: linkingConfig,
        },
      }}
    >
      <RootRoutes />
    </NavigationContainer>
  );
}
