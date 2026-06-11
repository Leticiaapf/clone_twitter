"use client"
import{useRouter} from "next/navigation";
import{useState} from "react";


export const SigninForm = () => {
    const router = useRouter();  // quando o cliente fizer o login vai mudar de tela
    const [emailField, setEmailField] = useState('');  //  guardar o email digitado, emailfield é o valor atual e o setemailfield e a funçao para atualizar esse valor
    const [passwordField, setPasswordField] = useState('');   // mesma logica da de cima

    const handleEnterButton = () => {
        router.replace('/home');
    }
 
    return (

<>
<div className="flex flex-col gap-4">
<input
 placeholder="Digite seu e-mail"
value={emailField}
onChange={e => setEmailField(e.target.value)}

></input>

<input 
type="password"
placeholder="Digite sua senha"
value={passwordField}
onChange={e => setPasswordField(e.target.value)}

></input>

<button onClick={handleEnterButton}>Entrar</button>
</div>


</>

    );
}