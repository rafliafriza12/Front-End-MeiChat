import { useState, useEffect } from "react";
import API from "../API/API";
const ChatCard = ({user, setUser, conversation, setConversation, setReciever, setIdConv}) => {
    
    const [users, setUsers] = useState([]);
    

    const getAllUsers = () => {
        const id = JSON.parse(localStorage.getItem('user'));
        API.get(`/conversation/${id.id}`).then((res) => {
            console.log(res.data);
            setUsers(res.data);
        }).catch((err) => console.log(err))
    }

    const getConversation = (conversationId, fullName, reciever) => {
        setUser(fullName);
        setReciever(reciever);
        setIdConv(conversationId);
        setInterval(()=>{
            API.get(`/message/${conversationId}`).then((res) => {
                console.log(res.data);
                setConversation(res.data);
            });
        },100)
    }

    useEffect(() => {

        getAllUsers();
    },[]);
    return (
        <div className=" h-screen w-[20%] flex flex-col box-border px-10 py-7 items-center gap-4 overflow-x-hidden border-r-[2px]">
            <div className="flex w-full justify-start items-center">
                <h1 className=" font-bold text-[20px]">Chats</h1>
            </div>
            {/* <div className=" w-full">
                <input className=" w-full h-[35px] border-[2px] border-[#808080] px-2 rounded-[5px]" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>
            </div> */}
            <div className=" w-full flex flex-col gap-2">
                {users.map(({conversationId,user}) => {
                    return (
                        <button onClick={() => getConversation(conversationId, user.fullName, user.id)}>
                            <div className="h-[50px] w-full border-b-[1px] flex justify-start items-center gap-2 px-2">
                                <div className='h-[30px] w-[30px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                <div className=" text-left">
                                    <h1 className=" font-semibold text-[#5a5a5a]">{user.fullName}</h1>
                                    <h1 className=" text-[#808080] text-[10px]">{user.email}</h1>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ChatCard