import React, { forwardRef } from 'react';
import type { TextInputProps } from 'react-native';
import { View, Text, TextInput } from 'react-native';

import { colors } from '~/constants/colors';

import { styles } from './styles';

export interface Props extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = forwardRef<TextInput, Props>(
  ({ label, error = '', ...rest }, ref) => (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        ref={ref}
        style={[styles.textInput, error ? { borderColor: colors.red } : {}]}
        placeholderTextColor={colors.supportText}
        {...rest}
      />

      <Text style={styles.errorText}>{error}</Text>
    </View>
  ),
);
