import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('O email é obrigatório')
    .email('Digite um email válido'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(6, 'Digite no mínimo 6 caracteres'),
});
