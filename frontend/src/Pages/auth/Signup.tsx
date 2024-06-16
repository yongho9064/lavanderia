import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Logo from "../../Components/common/Logo";

interface FormData {
    memberName: string;
    memberPhone: string;
    memberEmail: string;
    memberId: string;
    memberPwd: string;
    confirmPassword: string;
    agreeMarketingYn: string;
    memberBirth: string;
}

const fieldNames: (keyof FormData)[] = ['memberName', 'memberPhone', 'memberEmail', 'memberId', 'memberPwd', 'confirmPassword', 'memberBirth'];

const Signup = () => {
    const location = useLocation();

    const [formData, setFormData] = useState<FormData>({
        memberName: '',
        memberPhone: '010 ',
        memberEmail: '',
        memberId: '',
        memberPwd: '',
        confirmPassword: '',
        agreeMarketingYn: location.state?.agreeMarketingYn ? "Y" : "N",
        memberBirth: ''
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
            case 'memberName':
                return '이름을 입력해주세요';
            case 'memberPhone':
                return '휴대폰 번호를 입력해주세요';
            case 'memberEmail':
                return '이메일을 입력해주세요';
            case 'memberId':
                return '아이디를 입력해주세요';
            case 'memberPwd':
                return '비밀번호를 입력해주세요';
            case 'confirmPassword':
                return '비밀번호 확인을 입력해주세요';
            case 'memberBirth':
                return '생년월일을 입력해주세요';
            default:
                return '';
        }
    };

    const getInvalidMessage = (id: keyof FormData) => {
        switch (id) {
            case 'memberName':
                return '유효한 이름을 입력해주세요';
            case 'memberPhone':
                return '유효한 휴대폰 번호를 입력해주세요';
            case 'memberEmail':
                return '유효한 이메일을 입력해주세요';
            case 'memberId':
                return '유효한 아이디를 입력해주세요';
            case 'memberPwd':
                return '비밀번호는 최소 8자 이상이어야 해요';
            case 'confirmPassword':
                return '비밀번호가 일치하지 않습니다';
            case 'memberBirth':
                return '유효한 생년월일을 입력해주세요';
            default:
                return '';
        }
    };

    const validateInput = (id: keyof FormData, value: string) => {
        const newErrors: { [key: string]: string } = { ...errors };
        const patterns: { [key in keyof FormData]?: RegExp } = {
            memberName: /^[가-힣]{2,}$/,
            memberPhone: /^010 \d{4} \d{4}$/,
            memberEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            memberId: /^[a-zA-Z0-9]{4,}$/,
            memberBirth: /^(19|20)\d{2}-(0\d|1[0-2])-(0\d|[12]\d|3[01])$/
        };

        if (!value.trim()) {
            newErrors[id] = getErrorMessage(id);
        } else if (patterns[id] && !patterns[id]!.test(value.trim())) {
            newErrors[id] = getInvalidMessage(id);
        } else if (id === 'memberPwd' && value.length < 8) {
            newErrors.memberPwd = getInvalidMessage(id);
        } else if (id === 'confirmPassword' && value !== formData.memberPwd) {
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
                memberPhone: formData.memberPhone.split(' ').join(''),
            };

            console.log('Form Data to be submitted:', cleanedFormData);

            const response = await axios.post('/signup', cleanedFormData);

            if (response.status !== 200) {
                console.error(`Error: Received status code ${response.status}`);
                // 추가적인 에러 처리를 여기에 추가할 수 있습니다.
                return; // 필요에 따라 이후 코드를 실행하지 않도록 리턴할 수 있습니다.
            }

            console.log('Success:', response.data);
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

        setFormData({ ...formData, memberPhone: formatted });
        validateInput('memberPhone', formatted);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        if (id === 'memberPhone') {
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

          <div className="flex w-full h-16  justify-center items-center">
              <Logo/>
          </div>

          <div className="mt-5 w-full px-5">
              <p className="flex font-bold text-xl mb-10 text-center">
                  {['이름을 입력해 주세요', '휴대폰 번호를 입력해 주세요', '이메일을 입력해 주세요', '아이디를 입력해 주세요', '비밀번호를 입력해 주세요', '비밀번호 확인을 입력해 주세요', '생년월일을 입력해 주세요'][step - 1]}
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
