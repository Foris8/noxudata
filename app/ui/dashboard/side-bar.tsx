import { BsChatDots, BsChatDotsFill, BsFillBarChartFill,BsChat, BsPlus } from 'react-icons/bs';
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosStats } from 'react-icons/io';
import Image from 'next/image';
import { HiChevronUpDown } from "react-icons/hi2";

export default function SideBar() {
    return (
        <div className="bg-black h-screen p-5 pt-8 text-white flex flex-col">

            <div className="flex items-center mb-10 justify-center">
                <Image 
                src="/noxu-icon.jpeg"
                width={25}
                height={100}
                color='gray'
                alt="Error"
            />
                <span className="ml-1 text-lg">NoxuData</span>
            </div>

            <div className="flex items-center bg-gray-700 p-2 rounded-md mb-6">
                <BsChat className='mr-2'/>
                <input className="bg-transparent border-none text-white placeholder-white" placeholder="Chats" />
            </div>

            
            {/* this is a sample case and need to be written into seperate components later!! */}
            <div className="flex flex-col flex-grow ">
                
                <div className="mb-4">
                    <div className="flex items-center mb-2"> 
                        <HiChevronUpDown className="text-lg mr-3" />
                        <span className="text-sm">Open Chats</span>
                    </div>
                    <div className="text-gray-400 text-sm ml-10 mb-2">
                        <p className='mb-2'>Sample case</p>
                        <p className="text-blue-500">sample case...</p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <HiChevronUpDown className="text-lg mr-3" />
                        <span className="text-sm">Recently Closed Chats</span>
                    </div>

                    <div className="text-gray-400 text-sm ml-10">
                        <p>sample case</p>
                    
                    </div>
                </div>


                <div className="flex flex-col">
                    <div className="flex items-center mb-6">
                        <MdOutlineDashboard className="text-lg mr-3 " />
                        <span className="text-sm">Dashboards</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <IoIosStats className="text-lg mr-3" />
                        <span className="text-sm">Insights</span>
                    </div>
                </div>

                <div className="mt-auto"> 
                    <button className=" text-white p-2 px-4 rounded flex items-center justify-center w-full mt-5 border border-gray-700">
                        <span>Add Metrics</span>
                        <BsPlus className="ml-2" />
                    </button>
                </div>
             
                
            </div>
    
        </div>
    );
}
