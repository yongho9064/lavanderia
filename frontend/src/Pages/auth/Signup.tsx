import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

interface FormData {
    name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

const fieldNames: (keyof FormData)[] = ['name', 'phone', 'email', 'username', 'password', 'confirmPassword'];

const Signup = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '010',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isFocused, setIsFocused] = useState<{ [key: string]: boolean }>({});
    const [step, setStep] = useState(1);

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        if (inputRefs.current[step - 1]) {
            inputRefs.current[step - 1]?.focus();
        }
    }, [step]);

    const validateInput = (id: keyof FormData, value: string) => {
        const newErrors: { [key: string]: string } = { ...errors };
        const patterns: { [key in keyof FormData]?: RegExp } = {
            name: /^[가-힣a-zA-Z]{2,}$/,
            phone: /^010[0-9]{8}$/,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            username: /^[a-zA-Z0-9]{4,}$/,
        };

        if (!value.trim()) {
            newErrors[id] = `${id === 'name' ? '이름' :
                id === 'phone' ? '휴대폰 번호' :
                    id === 'email' ? '이메일' :
                        id === 'username' ? '아이디' :
                            id === 'password' ? '비밀번호' : '비밀번호 확인'}을 입력해주세요`;
        } else if (patterns[id] && !patterns[id]!.test(value.trim())) {
            newErrors[id] = `유효한 ${id === 'name' ? '이름' :
                id === 'phone' ? '휴대폰 번호' :
                    id === 'email' ? '이메일' :
                        id === 'username' ? '아이디' :
                            id === 'password' ? '비밀번호' : '비밀번호 확인'}을 입력해주세요`;
        } else if (id === 'password' && value.length < 8) {
            newErrors.password = '비밀번호는 최소 8자 이상이어야 해요';
        } else if (id === 'confirmPassword' && value !== formData.password) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
        } else {
            delete newErrors[id];
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        const currentStepId = fieldNames[step - 1];

        if (validateInput(currentStepId, formData[currentStepId])) {
            setStep(step + 1);
        } else {
            inputRefs.current[step - 1]?.focus();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        validateInput(id as keyof FormData, value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleNextStep();
        }
    };

    const isButtonDisabled = !!errors[fieldNames[step - 1]];

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="w-full h-28 pt-10 hidden items-center justify-center lg:flex">
                <h1 className="text-black w-2/3 h-full items-center border-b border-black text-3xl lg:flex">
                    <Link to="/" className="hidden lg:block lg:text-blue-500 lg:mr-5">lavanderia</Link>
                    <span className="font-bold text-2xl">회원가입</span>
                </h1>
            </div>

            <div className="mt-10 w-full px-5 lg:w-1/4 lg:px-0">
                <p className="flex font-bold text-xl mb-10 text-center lg:text-2xl">
                    {['이름을 입력해 주세요', '휴대폰 번호를 입력해 주세요', '이메일을 입력해 주세요', '아이디를 입력해 주세요', '비밀번호를 입력해 주세요', '비밀번호 확인을 입력해 주세요'][step - 1]}
                </p>
                <div className="flex flex-col gap-4">
                    {fieldNames.slice(0, step).map((field, index) => (
                        <div className="relative transition-all duration-500 ease-in-out mb-2" key={field}>
                            <label
                                className={`absolute left-0 transition-all duration-200 ${isFocused[field] || formData[field] ? '-top-6 text-sm text-gray-500' : 'top-3 text-lg text-gray-400 font-bold'}`}
                                htmlFor={field}
                            >
                                {field === 'name' ? '이름' :
                                    field === 'phone' ? '휴대폰 번호' :
                                        field === 'email' ? '이메일' :
                                            field === 'username' ? '아이디' :
                                                field === 'password' ? '비밀번호' : '비밀번호 확인'}
                            </label>
                            <input
                                className={`w-full border-b pl-0 font-bold text-xl border-0 border-gray-300 outline-none focus:ring-0 focus:border-gray-300 mb-2 ${errors[field] ? 'border-red-500' : ''}`}
                                type={field.includes('password') || field.includes('confirmPassword') ? 'password' : 'text'}
                                id={field}
                                ref={(el) => (inputRefs.current[index] = el)}
                                value={formData[field]}
                                onFocus={() => setIsFocused({ ...isFocused, [field]: true })}
                                onBlur={() => setIsFocused({ ...isFocused, [field]: false })}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNextStep}
                    className={`w-full p-3 bg-blue-500 text-white font-bold rounded ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isButtonDisabled}
                >
                    확인
                </button>
            </div>
        </div>
    );
};

export default Signup;
