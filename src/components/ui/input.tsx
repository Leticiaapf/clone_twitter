"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
// O placeholder vai ser obrigatório ele tem que receber string e o value e onChange são opcionais, pode ou não ter valor
type Props = {
    placeholder: string;  
    password?: boolean;
    filled?: boolean;
    icon?:IconDefinition;
    value?: string;
    onChange?: (newValue: string) => void;  // quando o usuário digita, essa funçao pode ser chamad
    
}

export const Input = ({placeholder, password, icon, filled, value, onChange}: Props) => {
    //aqui estamos recebendo props e ja desestruturando, em vez de props.placeholder, usamos direto placeholder

        const [showPassword, setShowPassword] = useState(false);
    return(

 <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>


  {icon && 
    <FontAwesomeIcon 
        icon={icon} 
        className="size-6 text-gray-500 ml-4" 
    />
}

 <input  
 type={password ? 'password' : 'text' }
  className="flex-1 outline-none bg-transparent h-full  px-4"
 placeholder={placeholder}  // mostra o texto do input
 value={ value}   // define  valor do input(controla por fora)
onChange={e => onChange && onChange(e.target.value)}   // quando o usuario digita
/*
1. "e" é o evento do input
2. e.target.value pega o texto digitado
3. onChange && onChange(...) verifica: 
  - se existe onChange → executa
  - se não existe → não faz nada (evita erro)  */
 
 
 
 />
 {password &&
<FontAwesomeIcon
onClick={() => setShowPassword(!showPassword)}
icon={showPassword ? faEye : faEyeSlash}
className="cursor-pointer mr-4 size-6 text-gray-500 ml-4"
/>
 
 
 
 }
  </div>

    );
}


//Props -> define o tipo
// ({ placeholder }: Props) → recebe o valor
//placeholder={placeholder} → usa no input 