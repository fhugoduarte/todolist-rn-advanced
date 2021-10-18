import React, { forwardRef, memo } from 'react';
import type { UseControllerProps } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { TextInput } from 'react-native';

import type { Props as InputProps } from '~/components/Input';
import { Input } from '~/components/Input';

type Props = InputProps & UseControllerProps<any>;

const InputFormComponent = forwardRef<TextInput, Props>(
  ({ control, name, defaultValue, shouldUnregister, rules, ...rest }, ref) => {
    return (
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
        rules={rules}
        render={({ field, fieldState }) => {
          return (
            <Input
              {...rest}
              ref={ref}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              error={fieldState?.error?.message}
            />
          );
        }}
      />
    );
  },
);

export const InputForm = memo(InputFormComponent);
