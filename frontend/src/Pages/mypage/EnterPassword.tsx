import React, {useState} from 'react';

const EnterPassword = () => {
    const [password, setPassword] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    return (
        <section className="min-h-fit flex flex-col justify-between">
            <h4 className="text-xs  font-semibold mt-4 mb-4 p-2 ">
                정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 입력해주세요
            </h4>
            <form className="p-2 relative flex-grow flex flex-col justify-between">
                <label>
                    <input
                        type="password"
                        className="h-10 w-full mb-96  border border-gray-300 rounded placeholder-gray-400 placeholder:text-base focus:outline-none focus:ring-2 focus:ring-amber-300"
                        placeholder="비밀번호 입력"
                        onChange={handleChange}
                    />
                </label>
                <div className='mb-16'>

                </div>
                <button
                    disabled={password.length <= 4}
                    className={`absolute bottom-0 w-full p-2 rounded text-white transition-all duration-300 
                        ${password.length > 4 ? 'bg-black hover:bg-black' : 'bg-gray-400 cursor-not-allowed'}`}
                >
                    완료
                </button>
            </form>
        </section>
    );
};

export default EnterPassword;
