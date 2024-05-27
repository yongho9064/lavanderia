import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaHome,
  FaCalendarAlt,
} from "react-icons/fa";

export const Signup = () => {
  const location = useLocation();
  const { marketingConsent } = location.state || {};

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    email: "",
    name: "",
    dob: "",
    phone: "",
    address: "",
    detailedAddress: "",
    consentPromo: "",
    marketingConsent: marketingConsent,
  });

  const [errors, setErrors] = useState({
    id: "",
    password: "",
    email: "",
    name: "",
    dob: "",
    phone: "",
    consentPromo: "",
  });

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validateInputs = () => {
    const newErrors: any = {};

    // ID validation
    if (!/^[a-zA-Z0-9]{8,}$/.test(formData.id)) {
      newErrors.id = "아이디는 영어와 숫자로만 구성된 8글자 이상이어야 합니다.";
    }

    // Password validation
    if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        formData.password,
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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (event: any) => {
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-lg flex-col">
        {/* Logo container aligned to the left */}
        <div className="mb-10 flex w-full items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-500 hover:text-blue-700"
          >
            lavanderia
          </Link>
        </div>
        <form
          className="w-full max-w-lg rounded-lg bg-white p-6 shadow"
          onSubmit={handleSignup}
        >
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              아이디
            </label>

            <div className="flex items-center rounded-md border border-gray-300 shadow-sm">
              <FaUser className="ml-2 inline text-blue-400" />
              <input
                id="id"
                type="text"
                required
                className="w-full px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="아이디"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            {errors.id && <p className="text-sm text-red-500">{errors.id}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <div className="flex items-center rounded-md border border-gray-300">
              <FaLock className="ml-2 inline text-blue-400" />
              <input
                id="password"
                type="password"
                required
                className="w-full  px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>

            <div className="flex items-center rounded-md border border-gray-300">
              <FaEnvelope className="ml-2 inline text-blue-400" />
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              이름
            </label>

            <div className="flex items-center rounded-md border border-gray-300">
              <FaUser className="ml-2 inline text-blue-400" />
              <input
                id="name"
                type="text"
                required
                className="w-full px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              생년월일
            </label>

            <div className="flex items-center rounded-md border border-gray-300">
              <FaCalendarAlt className="ml-2 inline text-blue-400" />
              <input
                id="dob"
                type="text"
                required
                className="w-full px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="YYYYMMDD"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            {errors.dob && <p className="text-sm text-red-500">{errors.dob}</p>}
          </div>

          {/* Mobile Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              전화번호
            </label>

            <div className="flex items-center rounded-md border border-gray-300">
              <FaPhone className="ml-2 inline text-blue-400" />
              <input
                id="phone"
                type="tel"
                required
                className="w-full  px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="010XXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              주소
            </label>

            <div className="flex items-center rounded-md border border-gray-300">
              <FaHome className="ml-2 inline text-blue-400" />
              <input
                id="address"
                type="text"
                required
                className="w-full  px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="주소"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Detailed Address */}
          <div className="mb-4">
            <label
              htmlFor="detailedAddress"
              className="block text-sm font-medium text-gray-700"
            >
              상세 주소
            </label>
            <div className="flex items-center rounded-md border border-gray-300">
              <FaHome className="ml-2 inline text-blue-400" />
              <input
                id="detailedAddress"
                type="text"
                required
                className="w-full  px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="상세주소"
                value={formData.detailedAddress}
                onChange={handleChange}
              />
            </div>
          </div>

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
                  value="Yes"
                  checked={formData.consentPromo === "Yes"}
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
                  value="No"
                  checked={formData.consentPromo === "No"}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  동의하지 않음
                </span>
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
