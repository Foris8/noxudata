import { FaExclamation } from "react-icons/fa6";

export default function HumanHelper() {
  return (
    <div className="flex items-center  border rounded-lg border-stone-300 bg-slate-50">
      <div className="flex items-center p-2 border-r h-full border-stone-300 ">
        <div className="flex items-center justify-center h-5 w-5 rounded-full border-orange-600 border-2 text-orange-600 ">
          <FaExclamation size={12}/>
        </div>
        <span className="ml-2 text-orange-600 font-semibold text-xs  ">Not Confident</span>
      </div>

      <div className="p-2">
        <button className="flex items-center text-xs font-semibold text-orange-600">
            Human Help <span className="ml-2">→</span>
        </button>
      </div>
      
    </div>
  );
}
