import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../components/Form/LoginForm";
import { IRegisterFormData } from "../components/Form/RegisterForm";
import { toast } from "react-toastify";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;
  userLogin: (formData: ILoginFormData) => Promise<void>;
  userRegister: (formData: IRegisterFormData) => Promise<void>
  userLogout: () => void;
}
interface IUser {
  id: string;
  name: string
  email: string;
}
interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}
interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:TOKEN") || "null")
    const id = JSON.parse(localStorage.getItem("@KenzieHub:ID") || "null")



    const autoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(data)
        navigate("/shop")
        toast.success("Seja bem vindo de volta!!!")
      }
      catch (error) {
      }
    }
    if (token && id) {
      autoLogin()
    }

  }, [])

  const userLogin = async (formData: ILoginFormData) => {
    try {
      const response = await api.post<IUserLoginResponse>("/login", formData)
      localStorage.setItem("@KenzieHub:TOKEN", JSON.stringify(response.data.accessToken))
      localStorage.setItem("@KenzieHub:ID", JSON.stringify(response.data.user.id))
      setUser(response.data.user)
      navigate("/shop")
      toast.success("Login feito com sucesso")
    }
    catch (error) {
      toast.error("Ops! Algo deu errado")
    }
  }

  const userRegister = async (formData: IRegisterFormData) => {
    try {
      const response = await api.post<IUserRegisterResponse>("/users", formData)
      navigate("/")
      toast.success("Cadastro feito com sucesso")
    }
    catch {
      toast.error("Ops!! Algo deu errado")
    }
  }

  const userLogout = () => {
    localStorage.removeItem("@KenzieHub:TOKEN")
    localStorage.removeItem("@KenzieHub:ID")
    setUser(null)
    navigate("/")
  }

  return (
    <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
      {children}
    </UserContext.Provider>
  )
};




