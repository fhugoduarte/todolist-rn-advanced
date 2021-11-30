import type { PropsWithChildren } from 'react';
import React, { useState, useCallback } from 'react';
import { createContext } from 'use-context-selector';

interface AuthContextType {
  isSigned: boolean;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [isSigned, setIsSigned] = useState(false);

  const signIn = useCallback(() => {
    setIsSigned(true);
  }, []);

  const signOut = useCallback(() => {
    setIsSigned(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isSigned,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
