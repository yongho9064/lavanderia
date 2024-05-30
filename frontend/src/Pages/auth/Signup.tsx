import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // 이름이 2자 이상이고, 특수 문자와 숫자가 없는 경우에만 버튼 활성화
        const namePattern = /^[가-힣a-zA-Z]{2,}$/;
        setIsButtonDisabled(!namePattern.test(name.trim()));
    }, [name]);

    const handleNextStep = () => {
        const namePattern = /^[가-힣a-zA-Z]{2,}$/;
        if (!name.trim()) {
            setError('이름을 입력해주세요');
        } else if (!namePattern.test(name.trim())) {
            setError('사용할 수 없는 이름이에요');
        } else {
            setError('');
            // Proceed to next step or handle name submission
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="w-full h-28 pt-10 flex items-center justify-center ">
                <h1 className="text-black w-2/3 h-full flex items-center border-b border-black text-3xl">
                    <Link to="/" className="text-blue-500 mr-5">lavanderia</Link>
                    <span className="font-bold text-2xl">회원가입</span>
                </h1>
            </div>

            <div className="w-1/3 mt-10">
                <p className="flex font-bold text-2xl mb-10 text-center">이름을 입력해 주세요</p>
                <div className="mb-4 relative">
                    <label
                        className={`absolute left-3 top-3 transition-all duration-200 ${
                            isFocused || name ? '-top-6 text-sm text-gray-500' : 'text-lg text-gray-500'
                        }`}
                        htmlFor="name"
                    >
                        이름
                    </label>
                    <input
                        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                        type="text"
                        id="name"
                        value={name}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                    />
                </div>
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                <button
                    onClick={handleNextStep}
                    className={`w-full p-3 bg-gray-400 text-white font-bold rounded ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isButtonDisabled}
                >
                    확인
                </button>
            </div>
        </div>
    );
};

export default Signup;
