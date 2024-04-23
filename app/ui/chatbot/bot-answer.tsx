import Image from "next/image";

interface BotAnswerProps {
  chatContent: string;
}

const BotAnswer: React.FC<BotAnswerProps> = ({ chatContent }) => {
  return (
    <div className="flex items-center space-x-4 pt-5 pb-5 pr-5 mx-auto w-full ">
      <Image
        src="/noxu-icon.jpeg"
        alt="User"
        className="w-10 h-10 rounded-full object-cover ml-40"
        width={25}
        height={100}
      />
      <p className="text-gray-800">{chatContent}</p>
    </div>
  );
};

export default BotAnswer;