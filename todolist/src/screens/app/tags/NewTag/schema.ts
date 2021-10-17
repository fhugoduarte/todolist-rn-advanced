import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  color: yup.string().required('A cor é obrigatória'),
});
