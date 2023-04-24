import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';
import Input from '../Input';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from './validator';
export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerSchema)
  })
  const submit: SubmitHandler<IRegisterFormData> = (formData) => {
    userRegister(formData)
  }
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input err={errors.name?.message} label='Nome' id='name' type='text' placeholder='Nome' register={register("name")} />
      <Input err={errors.email?.message} label='Email' id='email' type='email' placeholder='Email' register={register("email")} />
      <Input err={errors.password?.message} label='Senha' id='password' type='password' placeholder='Senha' register={register("password")} />
      <Input err={errors.confirmPass?.message} label='Confirme a senha' id='confirmPass' type='password' placeholder='Senha' register={register("confirmPass")} />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
}
export default RegisterForm;
