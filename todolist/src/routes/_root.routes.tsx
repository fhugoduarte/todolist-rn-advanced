import React from "react";

import { AppStack, linkingConfig as appLinks } from "./app/index.stack";
import { AuthStack, linkingConfig as authLinks } from "./auth/index.stack";

export const linkingConfig = {
  ...authLinks,
  ...appLinks,
};

export function RootRoutes() {
  return <AppStack />;
}
