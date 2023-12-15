import {useEffect} from 'react'
import './index.scss'
import LeftSidebar from '../../components/LeftSidebar'
import Dialogue from '../../components/Dialogue'
import WordInput from '../../components/WordInput'
import OnlineUsers from '../../components/OnlineUsers'
import useSocketService from '../../hooks/useSocketService'
import useRequest from '../../hooks/useRequest'
import {useAppSelector} from "../../store/hook.ts";

export default function Home() {

    const {reqGetMsg} = useRequest();
    useSocketService();
    // const refreshRef = useRef(1); // 防刷新
    const {token} = useAppSelector((state) => state.userInfo)

    useEffect(() => { // 第一次进入主页
        // if (refreshRef.current !== 1) return
        reqGetMsg(); // 拉取群聊历史信息
        // 拉取@信息
        // refreshRef.current++;
    }, [token]);

    return (
        <div className='Home'>
            <LeftSidebar/>
            <div className="rightChat">
                <Dialogue/>
                <WordInput/>
            </div>
            <OnlineUsers/>
        </div>
    )
}
