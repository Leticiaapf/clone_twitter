import Link from "next/link";
// Tipo das propriedades que o componente TrendingItem espera receber
type Props = {
label: string;
count: number;
}
// Componente que exibe um item individual da lista 
export const TrendingItem = ({label, count}: Props) => {
    return( 
        // Link do Next.js que redireciona para a página de busca ao clicar no item // encodeURIComponent garante que o termo da URL seja válido (trata espaços, acentos, etc.)
<Link
href={`/search?q=${encodeURIComponent(label)}`}
className="group"  
>
<div className="group-hover:underline font-bold">{label}</div>
<div className="text-sm text-gray-400">{count} posts</div>
</Link>
    );
}

// por ser um componente pequeno , inves de criar outro componente para TrendingItemSkeleton vai ser exportado aq

export const TrendingItemSkeleton = () => {
    return(
        <div className="animate-pulse flex flex-col gap-1">
            <div className="bg-gray-600  h-4"></div>
                 <div className="bg-gray-600 w-1/4 h-4"></div>
        </div>
    );
}