import Image from "next/image";
interface UserChatProps {
  chatContent: string;
  userPhoto: string;
}

const UserChat: React.FC<UserChatProps> = ({ chatContent, userPhoto }) => {
  return (
    <div className="flex items-center space-x-4 p-5  shadow bg-white  mx-auto w-full ">
      <Image
        src={userPhoto}
        alt="User"
        className="w-10 h-10 rounded-full object-cover ml-96"
        width={25}
        height={100}
      />
      <p className="text-gray-800">{chatContent}</p>
    </div>
  );
};

export default UserChat;