import { useContext, useRef, useEffect } from 'react'
import './index.scss'
import OtherSay from '../OtherSay'
import ISay from '../ISay'
import { msg } from '../../constant/type'
import { AppContext } from '../../App'

type props = {
  msg: msg[],
}

export default function Dialogue(props: props) {

  const { userInfo } = useContext(AppContext)!
  const { msg } = props;
  const dialogueRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{ // 滚动到最底部
    if(dialogueRef && dialogueRef.current){
      dialogueRef.current.scrollTop = dialogueRef.current.scrollHeight;
    }
  },[msg]);
  
  return (
    <div className='Dialogue' ref={dialogueRef}>
      {
        msg.map((value, index)=>{
          if(value.fromUserId === userInfo.userId){
            return <ISay ip={value.fromUserName} key={`${userInfo.userId}-${value.clientMessageId}`}>{value.message}</ISay>
          }
          else{
            return <OtherSay ip={value.fromUserName} key={`${value.fromUserId}-${value.clientMessageId}`}>{value.message}</OtherSay>
          }
        })
      }
    </div>
  )
}
