import { useEffect, useState } from "react";
import API from "../API/API";

const Chat = ({ user, conversation ,reciever, idConv}) => {
  const [currentId, setCurrentId] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const handleClick = () => {
    API.post('/message',{
        senderId: currentId,
        // recieverId: reciever,
        message: chatMessage,
        conversationId: idConv
    }).then((res) => console.log(res.data));
    setChatMessage("");
    const chat = document.getElementById('chat');
    setTimeout(() => {
        chat.scrollTo(
            {
                top: 1000,
                behavior: 'smooth'
            }
        );
    }, 1000)
  }
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user"));
    setCurrentId(id.id);
    console.log(conversation);
    console.log("id conv",idConv);
    console.log("reciever : ", reciever );
    const chat = document.getElementById('chat');
   
        chat.scrollTo(
            {
                top: 1000,
                behavior: 'smooth'
            }
        );
  }, []);
  return (
    <div className=" w-[76%] h-screen relative">
      <div className="wa fixed z-[-1] w-full h-full opacity-[0.25]"></div>
      <div className="bg-white w-full h-[10%] flex justify-between items-center box-border px-6 shadow-[0_2px_50px_-15px_rgba(0,0,0,0.3)]">
        <h1 className=" font-bold text-[20px]">{user}</h1>
        <div className=" w-[20px] h-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
      </div>
      <div className=" w-full h-[90%] flex flex-col py-1 justify-between items-center">
        <div id="chat" className="flex flex-col w-full gap-4 h-[90%] box-border px-4 overflow-x-hidden font-medium">
          {conversation.length > 0 &&
            conversation.map((chat) => {
              if (chat.user.id === currentId) {
                return (
                  <div className=" w-full flex justify-end">
                    <div className=" max-w-[500px] py-3 px-3 text-justify bg-green-300 rounded-2xl">
                      {chat.message}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className=" w-full flex justify-start">
                    <div className=" max-w-[500px] py-3 px-3 text-justify bg-green-300 rounded-2xl">
                      {chat.message}
                    </div>
                  </div>
                );
              }
            })}
        </div>
        <div className=" w-full h-[9%] flex justify-between items-center px-4">
          <div className=" w-full h-full flex items-center">
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className=" rounded-xl border-[2px] border-[#5a5a5a] w-[98%] px-2 py-1 box-border"
            ></textarea>
          </div>
          <button onClick={() => handleClick()} className=" hover:scale-[1.05] duration-300">
            <div className=" w-[50px] h-[50px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4ade80"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
