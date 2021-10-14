import React from "react";

import { AuthStack, linkingConfig as authLinks } from "./auth/index.stack";

export const linkingConfig = {
  ...authLinks,
};

export function RootRoutes() {
  return <AuthStack />;
}
