import { RecommendaitoItem } from "./recommendation-item";
import {user} from "@/data/user"


export const RecommendaitonArea = () => {
    return (
<div className="bg-gray-700 rounded-3xl mt-4">
<h2 className="text-xl p-6">Quem Seguir</h2>
<div className="flex flex-col gap-4 p-6 pt-0">
<RecommendaitoItem user={user}/>
<RecommendaitoItem user={user}/>

 </div>
</div>
    );
}