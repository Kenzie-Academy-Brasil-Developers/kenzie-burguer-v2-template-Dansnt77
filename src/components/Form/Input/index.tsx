import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: "text" | "email" | "number" | "password";
  label?: string;
  register: UseFormRegisterReturn<string>;
  id: string;
  placeholder: string;
  err?: string;

}

export const Input = ({ id, label, type, register, err }: IInput) => {
  return (
    <div>
      <StyledInputContainer>
        <input type={type} id={id} placeholder=' ' {...register} />
        {label ? <label htmlFor={id}>{label}</label> : null}
      </StyledInputContainer>
      <StyledParagraph fontColor='red'>{err}</StyledParagraph>
    </div>
  )

};

export default Input;
