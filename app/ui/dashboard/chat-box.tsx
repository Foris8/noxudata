import SuggestionButton from "./suggestion";
import { HiChevronUpDown } from "react-icons/hi2";
import { BsChat } from "react-icons/bs";
import { BsSend } from "react-icons/bs";

type SuggestionButtonType = {
  text: string;

};
const suggestionButtons: SuggestionButtonType[] = [
  { text: 'Suggest question 1',  },
  { text: 'Suggest question 2',  },
  { text: 'Suggest question 3', },
];

const ChatBox: React.FC = () => {
  return (
    <div className="flex justify-between flex-col p-4 border-t border-gray-200">
      <div className="flex space-x-4  ml-96">
        {suggestionButtons.map((button, index) => (
          <SuggestionButton key={index} text={button.text}  />
        ))}
      </div>

      <div className="flex space-x-4 items-center m-4 ml-96">
        <div className="flex border rounded-md">
            <div className="flex p-2  items-center border-r justify-between w-28">
                <BsChat className='mr-2'/>
                <span className="">Chat</span>
                <HiChevronUpDown/>
            </div>

            <div className=" flex items-center bg-white py-2 px-4 rounded" style={{width:'41rem'}}>
                <input type="text" placeholder="Start a new chat" className="outline-none w-full" />
                <BsSend className="text-slate-400"/>
            </div>
        </div>
        

        <button className="text-red-500 py-2 px-4 rounded focus:outline-none hover:bg-red-600 border border-red-500">
          End Chat
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
