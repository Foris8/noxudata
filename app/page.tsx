import Image from 'next/image'
import SideBar from './ui/dashboard/side-bar'
import UserChat from './ui/users/user-chat'
import BotChat from './ui/chatbot/bot-chat'
import ChatBox from './ui/dashboard/chat-box'

export default function Home() {
  return (
    <div className='flex h-screen'>
      <SideBar/>

      <div className='flex flex-col flex-grow'>
        <div className='flex-none p-5 border-b-2 text-black text-2xl font-medium'>
          Chats
        </div>

        <div className='flex-grow overflow-auto'> 
          <UserChat chatContent='List my top 10 accounts' userPhoto='/user-image.jpg'/>
          <div className='bg-gray-200'>
              <BotChat/>
          </div>
    
        </div>

        <div className='flex-none' >
          <ChatBox/>
        </div>
      </div>
    </div>
  )
}
