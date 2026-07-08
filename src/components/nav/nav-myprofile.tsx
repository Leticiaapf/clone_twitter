import { user } from "@/data/user"; // Ajuste o caminho conforme sua pasta
import Link from "next/link";

export const NavMyProfile = () => {
    return (
        <div className="flex items-center ">
            <div className="size-10 mr-2 rounded-full overflow">
                <Link href={`/${user.slug}`}>
                    <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="size-full" // Exemplo de estilo
                    />
                </Link>
            </div>

            <div className="flex-1 overflow-hidden">
                <Link href={`/${user.slug}`} className="block truncate">
                    
                        
                        {user.name}                                 
                       
                
                </Link>
                <div className="truncade text-sm text-gray-400"> @{user.slug}</div>

            </div>
        </div>
    );
}