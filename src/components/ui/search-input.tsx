"use client"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {Input} from "./input";
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";

type Props ={
    defaultValue?: string;
    hideOnSearch?: boolean; 
}

export const SearchInput = ({defaultValue, hideOnSearch}: Props) => {
    const router = useRouter(); // vai permitir redirecionar o user programaticamente
    const pathname = usePathname();
    const[searchInput, setSearchInput] = useState(defaultValue ?? '');      

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