import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaCalendarAlt,
  FaPhone,
  FaHome,
} from "react-icons/fa";

export const Signup = () => {
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
  });

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handlesignup = async (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // 아이디 중복검사 @ 아이디 정규화
    // 이메일 중복검사 후 코드 전송 가능하게
    // 전화번호 중복검사
    // 주소는 api 사용

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-5">
      <div className="flex w-full max-w-lg flex-col">
        {/* Logo container aligned to the left */}
        <div className="mb-5 flex w-full items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-500 hover:text-blue-700"
          >
            lavanderia
          </Link>
        </div>
        <form
          className="w-full max-w-lg rounded-lg bg-white p-6 shadow"
          onSubmit={handlesignup}
        >
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
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
                className="px-3 py-2 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="아이디"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
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
                className="px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
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
                className="px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <button
              type="button"
              className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              코드 전송
            </button>
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
                className="px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              생년월일 (8자리)
            </label>

            <div className="flex items-center rounded-md border border-gray-300">
              <FaCalendarAlt className="ml-2 inline text-blue-400" />
              <input
                id="dob"
                type="text"
                required
                className="px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="YYYYMMDD"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
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
                className="px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                placeholder="전화번호"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
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
                className="px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
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
                className="px-3 py-2 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
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
