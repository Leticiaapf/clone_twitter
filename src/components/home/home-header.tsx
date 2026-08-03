"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { HomeMenu } from "./home-menu";


export const HomeHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
    <header className="flex justify-between p-6 border-b-2 border-gray-900">
        <div className="lg:hidden">
            <Logo size={24}/>
        </div>
        <div className="hidden lg:block text-2xl">Página Inicial</div>
        {/*Icone das 3 barrinhas , lg:hidden significa que quando tiver no pc n vai aparecer, apenas para celular*/}
        <div className="cursor-pointer lg:hidden"  onClick={() => setShowMenu(true)}>
            <FontAwesomeIcon icon={faBars} className="size-6 "/>

        </div>

        {/*Esse componente vai ficar aqui, pois pode colocar ele em qualquer lugar, ele é flutuante  e ele vai receber uma prop que recebe uma funçao , no caso, quando alguem chamar closeaction , feche o menu*/}
        {showMenu && 
        <HomeMenu
        closeAction={() => setShowMenu(false)}/>
        }
    </header>
    );
}