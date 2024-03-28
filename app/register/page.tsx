'use client'

import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import style from './register.module.scss'

const registerSchema = z.object({
    username:z.string().nonempty("Username is required"),
    email: z.string().nonempty("Email is required"),
    password: z.string().nonempty("Password is required"),
    confirmpassword : z.string().nonempty("Confirm Password is required"),
})

type registerUserData = {
    username:string,
    email: string,
    password: string,
    confirmpassword:string
}


export default function Register(){
    const{register,handleSubmit,watch,formState:{errors}} = useForm<registerUserData>({resolver:zodResolver(registerSchema)})


    const onSubmit = (data:registerUserData)=>{
    console.log(data)
    }


    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <label htmlFor="username">Nome de usuario</label>
            {errors.username && <span>{errors.username.message}</span>}
            <input 
            type="text" 
            {...register("username")}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <span>{errors.email.message}</span>}
            <input 
            type="text" 
            {...register("email")}
            />
            <label htmlFor="password">Senha</label>
            {errors.password && <span>{errors.password.message}</span>}
            <input 
            type="text" 
            {...register("password")}
            />
            <label htmlFor="confirmpassword">Confirmação de senha</label>
            {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
            <input 
            type="text" 
            {...register("confirmpassword")}
            />
            <button>Registrar</button>
        </form>
        </>
    )
}