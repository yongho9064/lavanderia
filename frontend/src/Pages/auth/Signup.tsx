import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaCalendarAlt,
} from "react-icons/fa";
import InputField from "../auth/InputField";
import { Errors, FormData } from "../../Typings/auth/signup";
import Postcode from "../../Components/postcode/Postcode"; // Postcode 컴포넌트 임포트

export const Signup = () => {
  const location = useLocation();
  const { marketingConsent } = location.state || {};

  const [formData, setFormData] = useState<FormData>({
    id: "",
    password: "",
    email: "",
    name: "",
    dob: "",
    phone: "",
    address: "",
    detailedAddress: "",
    consentPromo: "",
    marketingConsent: marketingConsent ? "yse" : "no",
  });

  const [errors, setErrors] = useState<Errors>({
    id: "",
    password: "",
    email: "",
    name: "",
    dob: "",
    phone: "",
    consentPromo: "",
  });

  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false); // 주소 검색창 열기 상태

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const detailedAddressRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFocus = (id: string) => {
    const inputRef = getInputRef(id);
    if (inputRef && inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const getInputRef = (id: string) => {
    switch (id) {
      case "id":
        return idRef;
      case "password":
        return passwordRef;
      case "email":
        return emailRef;
      case "name":
        return nameRef;
      case "dob":
        return dobRef;
      case "phone":
        return phoneRef;
      case "address":
        return addressRef;
      case "detailedAddress":
        return detailedAddressRef;
      default:
        return null;
    }
  };

  const validateInputs = (): boolean => {
    const newErrors: Partial<Errors> = {};

    // ID validation
    if (!/^[a-zA-Z0-9]{8,}$/.test(formData.id)) {
      newErrors.id = "아이디는 영어와 숫자로만 구성된 8글자 이상이어야 합니다.";
    }

    // Password validation
    if (
        !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
            formData.password
        )
    ) {
      newErrors.password =
          "비밀번호는 영어, 숫자, 특수문자가 포함된 8글자 이상이어야 합니다.";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    // Name validation
    if (!/^[가-힣a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "이름은 한국어와 영어로만 입력해주세요.";
    }

    // Date of Birth validation
    if (!/^\d{8}$/.test(formData.dob)) {
      newErrors.dob = "생년월일은 8자리 숫자로 입력해주세요 (YYYYMMDD).";
    }

    // Phone validation
    if (!/^010\d{8}$/.test(formData.phone)) {
      newErrors.phone = "전화번호는 010과 8자리 숫자로 입력해주세요.";
    }

    // ConsentPromo validation
    if (!formData.consentPromo) {
      newErrors.consentPromo = "광고성 메시지 수신 동의를 선택해주세요.";
    }

    setErrors(newErrors as Errors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!validateInputs()) {
      return;
    }

    console.log(formData);
    // try {
    //   const response = await axios.post("/signup", formData);
    //   console.log("Server response:", response);
    //   // Additional actions based on success (e.g., redirect to login page)
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   // Handle errors here, such as displaying error messages to the user
    // }
  };

  const handleAddressSelect = (address: string) => {
    setFormData((prevState) => ({
      ...prevState,
      address,
    }));
    setIsPostcodeOpen(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsPostcodeOpen(false);
    }
  };

  const title = "lavanderia"

  return (
      <div className="flex min-h-screen flex-col items-center justify-center lg:bg-gray-100">
        <div className="flex w-full max-w-lg flex-col">
          {/* Logo container aligned to the left */}
          <div className="px-5 pt-5 flex w-full items-center lg:p-0 lg:bg-gray-100 lg:mb-5">
            <Link
                to="/"
                className="text-2xl font-bold text-blue-500 hover:text-blue-700"
            >
              {title}
            </Link>
          </div>
          <form
              className="w-full max-w-lg bg-white p-6 lg:rounded-lg lg:shadow"
              onSubmit={handleSignup}
          >
            <InputField
                id="id"
                label="아이디"
                type="text"
                placeholder="아이디"
                value={formData.id}
                onChange={handleChange}
                error={errors.id}
                icon={<FaUser className="ml-2 inline text-blue-400" />}
                onFocus={() => handleFocus("id")}
                inputRef={idRef}
            />

            <InputField
                id="password"
                label="비밀번호"
                type="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                icon={<FaLock className="ml-2 inline text-blue-400" />}
                onFocus={() => handleFocus("password")}
                inputRef={passwordRef}
            />

            <InputField
                id="email"
                label="이메일"
                type="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={<FaEnvelope className="ml-2 inline text-blue-400" />}
                onFocus={() => handleFocus("email")}
                inputRef={emailRef}
            />

            <InputField
                id="name"
                label="이름"
                type="text"
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                icon={<FaUser className="ml-2 inline text-blue-400" />}
                onFocus={() => handleFocus("name")}
                inputRef={nameRef}
            />

            <InputField
                id="dob"
                label="생년월일"
                type="text"
                placeholder="YYYYMMDD"
                value={formData.dob}
                onChange={handleChange}
                error={errors.dob}
                icon={<FaCalendarAlt className="ml-2 inline text-blue-400" />}
                onFocus={() => handleFocus("dob")}
                inputRef={dobRef}
            />

            <InputField
                id="phone"
                label="전화번호"
                type="tel"
                placeholder="010XXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                icon={<FaPhone className="ml-2 inline text-blue-400" />}
                onFocus={() => handleFocus("phone")}
                inputRef={phoneRef}
            />

            <div className="relative">
              <InputField
                  id="address"
                  label="주소"
                  type="text"
                  placeholder="주소"
                  value={formData.address}
                  onChange={handleChange}
                  icon={<FaHome className="ml-2 inline text-blue-400" />}
                  onFocus={() => handleFocus("address")}
                  inputRef={addressRef}
                  onClick={() => setIsPostcodeOpen(true)} // 주소 입력 필드 클릭 시 모달 열기
              />
              {isPostcodeOpen && (
                  <div
                      className="fixed px-5 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
                      onClick={handleModalClick}
                  >
                    <div className="bg-white p-4 rounded-lg w-full max-w-md">
                      <Postcode onComplete={handleAddressSelect} />
                    </div>
                  </div>
              )}
            </div>

            <InputField
                id="detailedAddress"
                label="상세 주소"
                type="text"
                placeholder="상세주소"
                value={formData.detailedAddress}
                onChange={handleChange}
                icon={<FaHome className="ml-2 inline text-blue-400" />}
                onFocus={() => handleFocus("detailedAddress")}
                inputRef={detailedAddressRef}
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                광고성 메시지 수신 동의
              </label>
              <div className="mt-1 flex gap-4">
                <label className="flex items-center">
                  <input
                      id="consentPromo"
                      type="radio"
                      name="consentPromo"
                      value="yes"
                      checked={formData.consentPromo === "yes"}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">동의</span>
                </label>
                <label className="flex items-center">
                  <input
                      id="consentPromo"
                      type="radio"
                      name="consentPromo"
                      value="no"
                      checked={formData.consentPromo === "no"}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">동의하지 않음</span>
                </label>
              </div>
              {errors.consentPromo && (
                  <p className="text-sm text-red-500">{errors.consentPromo}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
  );
};

export default Signup;
