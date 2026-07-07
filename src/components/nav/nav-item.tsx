import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
type Props= {
    label: string;
    icon: IconDefinition;
    href: string;
    active?: boolean;

}
export const NavItem = ({label, icon, href, active}: Props) => {
    return(
 <Link href={href} className={`flex items-center gap-6 py-3 `}>
 
 <FontAwesomeIcon icon={icon} className="size-6" ></FontAwesomeIcon>
 <div className="text-lg">{label}</div>
 </Link>
    );
}