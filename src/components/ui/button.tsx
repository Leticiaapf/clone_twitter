// Definir o tipo de props que o componente vai receber 

type Props = {
    label: string;
    onClick?: () => void; // opcional e função executada ao clicar
    size: 1 | 2 | 3;
}
// define o contrato do componente: "quem usar esse componente precisa passar um label que é string"

// criando componente button
export const Button = ({label, onClick, size}: Props) => {
    return(
        <div 
        onClick={onClick} className={`flex justify-center items-center cursor-pointer bg-white text-black  font-bold rounded-3xl  ${size ===1 && 'h-14 text-lg'}
         ${size ===2 && 'h-10 text-md'}
          ${size ===3 && 'h-7 text-xs'}`}>
            {label} {/* Aqui renderiza o texto recebido via props */}
        </div>
    );
}