import Link from "next/link";
import Image from "next/image";

type Props = {
    size: number; // Use dois pontos ( : ) aqui
};

export const Logo = ({ size }: Props) => {
    return (
        <Link href="/">
            <Image 
                src="/logo.png" 
                alt="Logo" 
                width={size} 
                height={size} // O height é obrigatório e pode ser igual ao size
                quality={100}
            />
        </Link>
    );
};