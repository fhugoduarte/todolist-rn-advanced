/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react-native';
import React from 'react';

import { Button } from '.';

describe('Component | Button', () => {
  it('should render text correctly', () => {
    const { getByText } = render(
      <Button title="Hello World" onPress={() => {}} />,
    );

    const textElement = getByText(/hello world/i);

    expect(textElement).toBeTruthy();
  });

  it("should render a loader when 'isLoading' is true", () => {
    const { getByA11yLabel } = render(
      <Button title="Hello World" isLoading onPress={() => {}} />,
    );

    const loaderElement = getByA11yLabel(/carregando/i);

    expect(loaderElement).toBeTruthy();
  });
});
