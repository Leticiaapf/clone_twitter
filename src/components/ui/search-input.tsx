"use client"  // indica que é um client component ( no caso, sempre que usar algum hook : useState precisa ter use client)
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Input} from "./input";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";

type Props ={ 
    defaultValue?: string;   // Valor inicial opcional (para quando já estamos numa página de busca)
    hideOnSearch?: boolean;  // Propriedade para decidir se o input deve sumir em certas condições
}

export const SearchInput = ({defaultValue, hideOnSearch}: Props) => {
    const router = useRouter();  // Hook para navegar entre páginas (ex: redirecionar para /search)
    const pathname = usePathname(); // Hook para saber em qual URL o usuário está agora
    // Estado interno para controlar o que o usuário digita no campo
    const[searchInput, setSearchInput] = useState(defaultValue ?? '');      
// Função disparada quando o usuário pressiona "Enter" no componente Input 
    const handleSearchEnter = () => {
 if(searchInput){
    // Redireciona para /search?q=TERMO_BUSCADO
            // encodeURIComponent garante que caracteres especiais (espaços, acentos, etc.)
            // sejam convertidos para formato válido de URL
    router.push('/search?q=' +encodeURIComponent(searchInput));
 }
 if(hideOnSearch && pathname === '/search') return null; // porem isso tbm vai dar erro, teem que ter uma prop que indique  que quando searchinput estiver no serach ele vai sumir 
    }
    return(
<Input
placeholder="Buscar"
icon={faMagnifyingGlass}
filled
value={searchInput}
onChange={setSearchInput}
onEnter={handleSearchEnter}

/>
    );
}