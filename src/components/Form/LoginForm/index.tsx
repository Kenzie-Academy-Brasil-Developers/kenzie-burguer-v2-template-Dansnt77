import { useContext } from 'react';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/UserContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './validator';

export interface ILoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { userLogin } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData)
  }
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>

      <Input err={errors.email?.message} label='Email' id='login' type='email' placeholder='email' register={register("email")} />
      <Input err={errors.password?.message} label='Senha' id='senha' type='password' placeholder='senha' register={register("password")} />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )

};

export default LoginForm;
