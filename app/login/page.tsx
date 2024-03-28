'use client'

import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import style from './login.module.scss'

const loginSchema = z.object({
    email: z.string().nonempty("Username is required"),
    password: z.string().nonempty("Password is required")
})

type loginUserData = {
    email: string,
    password: string
}


export default function Login(){
const{register,handleSubmit,watch,formState:{errors}} = useForm<loginUserData>({resolver:zodResolver(loginSchema)})


const onSubmit = (data:loginUserData)=>{
console.log(data)
}
    return(
        <>
         <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
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

            <button>LOGIN</button>
         </form>
        </>
    )
}