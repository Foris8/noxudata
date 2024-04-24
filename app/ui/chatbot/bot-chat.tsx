import HumanHelper from "./human-help"
import BotAnswer from "./bot-answer"
import TableComponent from "./table"

export default function BotChat(){
    return(
        <div className="flex p-5 flex-col shadow  ">
            <div className="ml-96" style={{ maxWidth: '250px' }}>
                <HumanHelper/>
            </div>
        
            <BotAnswer chatContent="To find out how many accounts you have, you can use the following query:"/>
            <TableComponent/>
            
            
           
            
            
        </div>
    )
}