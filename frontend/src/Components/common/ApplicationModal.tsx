import React from 'react';

const ApplicationModal = ({service, closeModal}: any) => {
    return (
        <div
            className="fixed z-[999] top-0 left-0 w-full h-full bg-black bg-opacity-30"
            onClick={closeModal}
        >
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 m-auto rounded-lg bg-white shadow-2xl p-5"
                onClick={(event) => event.stopPropagation()} // 이벤트 전파 중지
            >
                <h2 className="text-center text-xl font-bold mb-4">선택된 상품을 추가합니다</h2>
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-center text-gray-600 mb-5 font-bold">
                        {service?.title}을(를) 주문 목록에 추가하려면 확인 버튼을 눌러주세요.
                    </p>

                    <div className="flex gap-2">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={closeModal} // 여긴 추가믿 닫기로 변경
                        >
                            확인
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                            onClick={closeModal} // 클릭 시 모달 닫기
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationModal;
