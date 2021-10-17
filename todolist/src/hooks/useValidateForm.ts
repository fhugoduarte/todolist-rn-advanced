import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import type {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  FieldError,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type * as yup from 'yup';

export type onErrorType<T> = { [key in keyof T]?: () => void } | (() => void);

interface UseValidateFormProps<T extends FieldValues = FieldValues>
  extends Omit<UseFormProps<T>, 'resolver'> {
  schema?: yup.ObjectSchema<{ [key in keyof T]?: any }>;
  onError?: onErrorType<T>;
}

type Error = {
  [key: string]: FieldError;
};

type Response<Fields> = {
  field: Fields;
  message?: string;
  errorsFields: Fields[];
};

export function getSchemaErrors<Fields = string>(
  errors: Error = {},
): Response<Fields> | undefined {
  const hasErrors = Object.keys(errors).length;

  if (hasErrors) {
    const [error] = Object.keys(errors).map(key => {
      return {
        field: key,
        message: errors[key].message,
      };
    });

    return {
      ...error,
      errorsFields: Object.keys(errors),
    } as unknown as Response<Fields>;
  }

  return undefined;
}

interface UseValidateFormReturn<T extends FieldValues = FieldValues>
  extends UseFormReturn<T> {
  schemaError?: {
    field: keyof T;
    message?: string;
    errorsFields: Array<keyof T>;
  };
}

export function useValidateForm<T extends FieldValues = FieldValues>({
  schema,
  onError,
  ...params
}: UseValidateFormProps<T> = {}): UseValidateFormReturn<T> {
  const resolver = schema ? yupResolver(schema) : undefined;

  const response = useForm<T>({
    resolver,
    ...params,
  });

  const { errors, isSubmitting } = response.formState;

  const schemaError = getSchemaErrors<keyof T>(errors as Error);

  useEffect(() => {
    if (!!schemaError && isSubmitting) {
      if (onError) {
        if (typeof onError === 'function') {
          onError();
        } else {
          const calledFunction = onError[schemaError.field];

          if (calledFunction) {
            calledFunction();
          }
        }
      }
    }
  }, [schemaError, isSubmitting, onError]);

  return {
    ...response,
    schemaError,
  };
}
