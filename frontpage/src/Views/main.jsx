import logoMie from "../Assets/IMG/logo-mie.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardProfile from "../Components/CardProfile";
import { useEffect, useState } from "react";
import ChatCard from "../Components/ChatCard";
import { useNavigate } from "react-router-dom";
import Chat from "../Components/Chat";

const SideBar = () => {
  const navigate = useNavigate();
  const [iconFocus, setIconFocus] = useState(2);
  const [idUser, setIdUser] = useState("");
  const [reciever,setReciever] = useState("");
  const [conversation, setConversation] = useState([]);
  const [idConv, setIdConv] = useState("");
  
  const logout = () => {
    localStorage.setItem('token', "");
    localStorage.setItem('user', "");
    navigate('/');
  }

  useEffect(() => {
    if(localStorage.getItem('token') === "") {
      navigate('/');
    };
  },[localStorage.getItem('token')])
  return (
    <div className=" w-screen h-screen flex">
      <div className=" h-screen w-[4%] bg-[#252525] flex flex-col items-center text-white box-border py-7 justify-between">
        <div className=" flex flex-col gap-16">
          <div>
            <div className=" h-[30px] w-[30px]">
              <img src={logoMie} alt="Logo" className=" object-fill" />
            </div>
          </div>
          <div className=" flex flex-col gap-10">
            <div className="h-[30px] w-[30px]" onClick={() => setIconFocus(1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${iconFocus === 1 ? "text-green-400" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>

            <div className="h-[30px] w-[30px]" onClick={() => setIconFocus(2)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={` ${iconFocus === 2 ? "text-green-400" : ""}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
        <div className="h-[30px] w-[30px]" onClick={() => logout()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
          </div>
        </div>
      </div>
      {iconFocus === 1 && <CardProfile />}
      {iconFocus === 2 && <ChatCard user={idUser} setUser={setIdUser} conversation={conversation} setConversation={setConversation} setReciever={setReciever} setIdConv={setIdConv}/>}
      {/* <Router>
                <Routes>
                    <Route path='/dashboard/chat' element={<Chat id={idUser}/>}/>
                </Routes>
            </Router> */}
      {idUser !== "" && <Chat user={idUser} conversation={conversation} reciever={reciever} idConv={idConv}/>}
    </div>
  );
};

export default SideBar;
