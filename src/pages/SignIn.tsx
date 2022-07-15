import { useState } from "react";
import { Layout } from "../components/Layout";
import { MailIcon, EyeIcon, EyeOffIcon, LockClosedIcon } from '@heroicons/react/outline';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ControlledInput } from "../components/ControlledInput";

export type FormDataLogin = {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email("Informe um e-mail válido").required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório").min(8, 'A senha deve conter no mínino 8 carectéres'),
}).required();

const SignIn = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => console.log(data);
  
  return (
    <Layout>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 flex flex-col p-8 ">
          <div className="mt-4">
            <div className="text-center mb-6">
              <strong className="text-3xl text-blue-800 mb-4">Faça seu login</strong>
            </div>
            <div>
              <ControlledInput 
                name="email"
                control={control}
                label="E-mail"
                placeholder="Digite o seu e-mail"
                leftIcon={
                  <MailIcon className="h-6 w-6 text-gray-500" />
                }
              />
             
            </div>

            <div className="mt-10">
            <ControlledInput 
              name="password"
              control={control}
              placeholder="Digite sua senha"
              label="Senha"
              type={!isShowPassword ? 'password' : 'text'}
              leftIcon={<LockClosedIcon className="h-6 w-6 text-gray-500" />}
              rightIcon={
                !isShowPassword 
                  ? <EyeIcon className="h-6 w-6 text-gray-500" /> 
                  : <EyeOffIcon className="h-6 w-6 text-gray-500" />
              }
              onClickRightIcon={() => setIsShowPassword(prevState => !prevState)}
            />
              
            </div>
            <div className="mt-8 flex w-full items-center justify-center">
              <button 
                className="flex justify-center p-4 px-24 bg-blue-800 text-white font-bold border rounded-md hover:bg-blue-900"
              >
                  Entrar
                </button>
            </div>
          </div>
        </div>
      </form>      
    </Layout>
  )
}

export default SignIn;