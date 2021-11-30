import { useContextSelector } from 'use-context-selector';

import { AuthContext } from '~/providers/AuthProvider';

export function useAuth() {
  const signIn = useContextSelector(AuthContext, context => context.signIn);
  const signOut = useContextSelector(AuthContext, context => context.signOut);
  const isSigned = useContextSelector(AuthContext, context => context.isSigned);

  return {
    signIn,
    signOut,
    isSigned,
  };
}
