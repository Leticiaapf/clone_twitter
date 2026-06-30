"use client"
import{useRouter} from "next/navigation";
import{useState} from "react";
import { Input } from "../ui/input";
import { faHeart } from '@fortawesome/free-solid-svg-icons';




export const SigninForm = () => {
    const router = useRouter();  // quando o cliente fizer o login vai mudar de tela
    const [emailField, setEmailField] = useState('');  //  guardar o email digitado, emailfield é o valor atual e o setemailfield e a funçao para atualizar esse valor
    const [passwordField, setPasswordField] = useState('');   // mesma logica da de cima

    const handleEnterButton = () => {
        router.replace('/home');  // página inicial
    }
 
    return (

<>
<div className="flex flex-col gap-4">
<Input
 placeholder="Digite seu e-mail"
value={emailField}
onChange={t => setEmailField(t)}



/>


  

<Input

placeholder="Digite sua senha"
value={passwordField}
onChange={t => setPasswordField(t)}
password
/>


<button onClick={handleEnterButton}>Entrar</button>



</div>


</>

    );
}