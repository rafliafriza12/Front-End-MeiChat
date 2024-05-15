import { useEffect, useState } from 'react';
import bg from '../Assets/IMG/bg.jpg';
import API from '../API/API';
const CardProfile = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const [user,setUser] = useState(currentUser);
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullname] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);

    const editHandler = () => {
        API.put(`/users/edit/${user.id}`,{
            fullName: fullName,
            email: email
        })
        .then((res) => {
            console.log(user);
            console.log(res.data);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setUser(res.data.user);
        })
        .catch((err) => console.log(err))

        setIsEdit(false)
    }
    useEffect(() => {
        console.log("currentUser",currentUser);
        console.log("user:",user);
    },[]);

    return(
        <div className=" h-screen w-[20%] flex flex-col overflow-x-hidden border-r-[2px]">
            <div className=" h-[150px] w-full">
                <img src={bg} alt="" className=' object-cover'/>
            </div>

            <div className=' w-full h-[100px] bg-white flex flex-col items-center gap-2 border-b-[1px]'>
                <div className=' w-[55px] h-[55px] rounded-full border-[#5a5a5a] border-[3px] bg-white p-1 mt-[-30px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5a5a5a" className="w-full h-full object-fill">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>

                <div>
                    <h1 className=' font-bold text-black'>{user.fullName}</h1>
                </div>
                <div className={`w-full px-3 flex justify-end ${isEdit ? 'hidden' : ''}`}>
                    <button onClick={() => setIsEdit(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                    </button>
                </div>
            </div>

            {!isEdit && <div className=' w-full px-10 font-medium text-[#5a5a5a] flex flex-col gap-4 mt-4'>
                <div className="flex items-center gap-2">
                    <div className=' h-[20px] w-[20px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <h1 className=' font-bold text-[13px]'>{user.fullName}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className=' h-[20px] w-[20px]'>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <h1 className='font-bold text-[13px]'>{user.email}</h1>
                </div>
            </div>}

            {isEdit && <div className=' w-full px-10 font-medium text-[#5a5a5a] flex flex-col gap-4 mt-4'>
                <div className="flex items-center gap-2">
                    <div className=' h-[20px] w-[20px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <input className=' font-bold text-[13px] focus:outline-none border-b-[1px] border-b-black' value={fullName} onChange={(e) => setFullname(e.target.value)}/>
                </div>
                <div className="flex items-center gap-2">
                    <div className=' h-[20px] w-[20px]'>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20px] h-[20px">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <input className='font-bold text-[13px] focus:outline-none border-b-[1px] border-b-black' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className=' flex items-center justify-start gap-3 mt-3'>
                    <button onClick={() => editHandler()} className='bg-green-300 text-[#5a5a5a] font-bold px-3 py-1 rounded border-[1px] border-[#5a5a5a]'>Save</button>
                    <button onClick={() => setIsEdit(false)} className='bg-white text-[#5a5a5a] font-bold px-3 py-1 rounded border-[1px] border-[#5a5a5a]'>Cancel</button>
                </div>
            </div>}
            
        </div>
    );
}

export default CardProfile;