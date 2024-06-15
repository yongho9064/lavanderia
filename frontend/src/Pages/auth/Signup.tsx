import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../Components/common/Logo";

interface FormData {
    name: string;
    phone: string;
    email: string;
    userId: string;
    password: string;
    confirmPassword: string;
}

const fieldNames: (keyof FormData)[] = ['name', 'phone', 'email', 'userId', 'password', 'confirmPassword'];

const Signup = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '010 ',
        email: '',
        userId: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isFocused, setIsFocused] = useState<{ [key: string]: boolean }>({});
    const [step, setStep] = useState(1);

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        const currentInput = inputRefs.current[step - 1];
        if (currentInput) {
            currentInput.focus();
            currentInput.scrollIntoView({ behavior: 'smooth' });
        }
    }, [step]);

    const getErrorMessage = (id: keyof FormData) => {
        switch (id) {
            case 'name':
                return '이름을 입력해주세요';
            case 'phone':
                return '휴대폰 번호를 입력해주세요';
            case 'email':
                return '이메일을 입력해주세요';
            case 'userId':
                return '아이디를 입력해주세요';
            case 'password':
                return '비밀번호를 입력해주세요';
            case 'confirmPassword':
                return '비밀번호 확인을 입력해주세요';
            default:
                return '';
        }
    };

    const getInvalidMessage = (id: keyof FormData) => {
        switch (id) {
            case 'name':
                return '유효한 이름을 입력해주세요';
            case 'phone':
                return '유효한 휴대폰 번호를 입력해주세요';
            case 'email':
                return '유효한 이메일을 입력해주세요';
            case 'userId':
                return '유효한 아이디를 입력해주세요';
            case 'password':
                return '비밀번호는 최소 8자 이상이어야 해요';
            case 'confirmPassword':
                return '비밀번호가 일치하지 않습니다';
            default:
                return '';
        }
    };

    const validateInput = (id: keyof FormData, value: string) => {
        const newErrors: { [key: string]: string } = { ...errors };
        const patterns: { [key in keyof FormData]?: RegExp } = {
            name: /^[가-힣]{2,}$/,
            phone: /^010 \d{4} \d{4}$/,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            userId: /^[a-zA-Z0-9]{4,}$/,
        };

        if (!value.trim()) {
            newErrors[id] = getErrorMessage(id);
        } else if (patterns[id] && !patterns[id]!.test(value.trim())) {
            newErrors[id] = getInvalidMessage(id);
        } else if (id === 'password' && value.length < 8) {
            newErrors.password = getInvalidMessage(id);
        } else if (id === 'confirmPassword' && value !== formData.password) {
            newErrors.confirmPassword = getInvalidMessage(id);
        } else {
            delete newErrors[id];
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        const currentStepId = fieldNames[step - 1];

        if (validateInput(currentStepId, formData[currentStepId])) {
            if (step === fieldNames.length) {
                handleSubmit().catch(console.error); // Catch and log any error
            } else {
                setStep(step + 1);
            }
        } else {
            inputRefs.current[step - 1]?.focus();
        }
    };

    const handleSubmit = async () => {
        try {
            const cleanedFormData = {
                ...formData,
                phone: formData.phone.split(' ').join(''),
            };

            console.log('Form Data to be submitted:', cleanedFormData);

            const response = await fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cleanedFormData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
            // Handle success (e.g., redirect to another page, show a success message, etc.)
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message, etc.)
        }
    };

    const handlePhoneChange = (value: string) => {
        // Remove any non-digit characters
        const cleaned = value.replace(/\D/g, '');

        let formatted: string;
        if (cleaned.length <= 3) {
            formatted = cleaned;
        } else if (cleaned.length <= 7) {
            formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
        } else {
            formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3, 7)} ${cleaned.slice(7, 11)}`;
        }

        setFormData({ ...formData, phone: formatted });
        validateInput('phone', formatted);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === 'phone') {
            handlePhoneChange(value);
        } else {
            setFormData({ ...formData, [id]: value });
            validateInput(id as keyof FormData, value);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleNextStep();
        }
    };

    const isButtonDisabled = !!errors[fieldNames[step - 1]];

    return (
        <div className="min-h-screen max-w-2xl m-auto flex flex-col items-center lg: border">
            <Logo/>
            <div className="w-full h-20 pt-15 hidden items-center justify-center">
                <h1 className="text-black w-2/3 h-full items-center border-b border-black text-3xl">
                    <Logo/>
                    <span className="ml-5 font-bold text-2xl">회원가입</span>
                </h1>
            </div>

            <div className="mt-10 w-full px-5">
                <p className="flex font-bold text-xl mb-10 text-center">
                    {['이름을 입력해 주세요', '휴대폰 번호를 입력해 주세요', '이메일을 입력해 주세요', '아이디를 입력해 주세요', '비밀번호를 입력해 주세요', '비밀번호 확인을 입력해 주세요'][step - 1]}
                </p>
                <div className="flex flex-col gap-4">
                    {fieldNames.slice(0, step).map((field, index) => (
                        <div className="relative transition-all duration-500 ease-in-out mb-2" key={field}>
                            <label
                                className={`absolute left-0 transition-all duration-200 ${isFocused[field] || formData[field] ? '-top-6 text-sm text-gray-500' : 'top-3 text-lg text-gray-400 font-bold'}`}
                                htmlFor={field}
                            >
                                {getErrorMessage(field)}
                            </label>
                            <input
                                className={`w-full border-b pl-0 font-bold text-xl border-0 border-gray-300 outline-none focus:ring-0 focus:border-gray-300 mb-2 ${errors[field] ? 'border-red-500' : ''}`}
                                type={field.includes('password') || field.includes('confirmPassword') ? 'password' : 'text'}
                                id={field}
                                ref={(el) => (inputRefs.current[index] = el)}
                                value={formData[field]}
                                onFocus={() => {
                                    setIsFocused({ ...isFocused, [field]: true });
                                    inputRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
                                }}
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
