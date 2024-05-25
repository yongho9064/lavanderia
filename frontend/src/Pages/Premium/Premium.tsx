import React, { useState, ReactNode } from "react";
import clothes_1 from "../../Assets/Img/clothes_1.png";

interface EditFieldProps {
  label: string;
  defaultValue: string;
}

interface EditableSectionProps {
  title: string;
  isEditing: boolean;
  handleEdit: () => void;
  children: ReactNode;
}

const EditField: React.FC<EditFieldProps> = ({ label, defaultValue }) => (
  <div className="mb-2">
    <label className="block font-semibold">{label}</label>
    <input
      type="text"
      className="w-full rounded border p-2"
      defaultValue={defaultValue}
    />
  </div>
);

const EditableSection: React.FC<EditableSectionProps> = ({
  title,
  isEditing,
  handleEdit,
  children,
}) => (
  <div className="rounded-lg border p-5 shadow-md">
    <h2 className="mb-4 text-xl font-bold">{title}</h2>
    {isEditing ? (
      <div>
        {children}
        <button
          className="mt-2 rounded bg-blue-500 px-4 py-1 text-white"
          onClick={handleEdit}
        >
          저장
        </button>
      </div>
    ) : (
      <div>
        {children}
        <button
          className="mt-2 rounded bg-blue-500 px-4 py-1 text-white"
          onClick={handleEdit}
        >
          변경
        </button>
      </div>
    )}
  </div>
);

const CheckoutPage: React.FC = () => {
  const [isEditingDelivery, setIsEditingDelivery] = useState(false);
  const [isEditingPickupDate, setIsEditingPickupDate] = useState(false);
  const [isEditingPickupAddress, setIsEditingPickupAddress] = useState(false);

  const handleDeliveryEdit = () => setIsEditingDelivery(!isEditingDelivery);
  const handlePickupDateEdit = () =>
    setIsEditingPickupDate(!isEditingPickupDate);
  const handlePickupAddressEdit = () =>
    setIsEditingPickupAddress(!isEditingPickupAddress);

  return (
    <div className="container mx-auto mt-5 w-full p-5 lg:w-2/3 lg:px-0">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <EditableSection
          title="배송지"
          isEditing={isEditingDelivery}
          handleEdit={handleDeliveryEdit}
        >
          {isEditingDelivery ? (
            <>
              <EditField label="이름" defaultValue="이용준" />
              <EditField label="연락처" defaultValue="010-3043-4930" />
              <EditField label="주소" defaultValue="경기도 성남시" />
            </>
          ) : (
            <>
              <div className="mb-2">
                <p className="font-semibold">이름</p>
                <p>이용준</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">연락처</p>
                <p>010-3043-4930</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">주소</p>
                <p>경기도 성남시</p>
              </div>
            </>
          )}
        </EditableSection>

        <EditableSection
          title="수거일/배송일"
          isEditing={isEditingPickupDate}
          handleEdit={handlePickupDateEdit}
        >
          {isEditingPickupDate ? (
            <>
              <EditField label="수거일" defaultValue="04/30(화) 밤 11시부터" />
              <EditField label="배송일" defaultValue="05/02(목) 아침 7시까지" />
            </>
          ) : (
            <div className="mb-2">
              <p>수거: 04/30(화) 밤 11시부터</p>
              <p>배송: 05/02(목) 아침 7시까지</p>
            </div>
          )}
        </EditableSection>

        <EditableSection
          title="수거*배송 장소"
          isEditing={isEditingPickupAddress}
          handleEdit={handlePickupAddressEdit}
        >
          {isEditingPickupAddress ? (
            <>
              <EditField label="수거 장소" defaultValue="문 앞" />
              <EditField label="배송 장소" defaultValue="문 앞" />
            </>
          ) : (
            <div className="mb-2">
              <p>수거: 문 앞</p>
              <p>배송: 문 앞</p>
            </div>
          )}
        </EditableSection>

        <div className="rounded-lg border p-5 shadow-md">
          <h2 className="mb-4 text-xl font-bold">주문상품</h2>
          <div className="mb-2 flex items-center">
            <img
              src={clothes_1}
              alt="Laundry Item"
              className="mr-4 h-16 w-16"
            />
            <div>
              <p className="font-semibold">라반데리아</p>
              <p>일반 의류 다림질 항균 추가</p>
              <p>30,000원</p>
            </div>
          </div>
          <div className="mt-4 rounded bg-blue-500 p-4 text-center text-white">
            <p className="text-lg font-bold">총 주문금액</p>
            <p className="text-xl font-bold">30,000원</p>
          </div>
        </div>

        <div className="rounded-lg border p-5 shadow-md">
          <h2 className="mb-4 text-xl font-bold">포인트 혜택</h2>
          <div className="mb-2 flex justify-between">
            <p>구매적립</p>
            <p>총 199점</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p>기본적립</p>
            <p>100점</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p>추가적립</p>
            <p>최대 150점</p>
          </div>
          <p className="text-right text-blue-500">최대 300점 적립</p>
        </div>
      </div>

      <div className="mt-5 rounded-lg border p-5 shadow-md">
        <h2 className="mb-4 text-xl font-bold">결제수단</h2>
        <div className="mb-2">
          <label className="mb-2 flex items-center">
            <input type="radio" name="payment" className="mr-2" /> 카드 결제
          </label>
          <div className="ml-4">
            <select className="mb-2 w-full rounded border p-2">
              <option>카드를 선택해주세요</option>
              <option>카드 1</option>
              <option>카드 2</option>
            </select>
            <input
              type="text"
              placeholder="할부개월수 입력"
              className="w-full rounded border p-2"
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="mb-2 flex items-center">
            <input type="radio" name="payment" className="mr-2" /> 계좌 이체
          </label>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button className="rounded-lg bg-blue-500 px-6 py-3 text-xl text-white">
          세탁 신청완료
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
