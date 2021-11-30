import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { useAuth } from '~/hooks/useAuth';

import { AuthProvider } from './AuthProvider';

function render() {
  return renderHook(useAuth, {
    wrapper: props => <AuthProvider {...props} />,
  });
}

describe('Provider | AuthProvider', () => {
  it('should start not signed', () => {
    const { result } = render();

    expect(result.current.isSigned).not.toBeTruthy();
  });

  it('should authenticate the user when call signIn function', () => {
    const { result } = render();

    act(() => {
      result.current.signIn();
    });

    expect(result.current.isSigned).toBeTruthy();
  });
});
