import axiosInstance from '../../Pages/application/axiosInstance'
import { decryptToken } from '../../Utils/auth/crypto'
import * as PortOne from '@portone/browser-sdk/v2'

export const kakaoPaymentRequest = async (
  totalAmount: number,
  orderId: string,
) => {
  try {
    const responseUserData = await PortOne.requestPayment({
      storeId: 'store-ffd209ec-d7d8-4d76-bc10-127bb89cc651',
      // 채널 키 설정
      totalAmount,
      channelKey: 'channel-key-18691381-0f3b-4160-9e46-e483e6ae1b5b',
      paymentId: crypto.randomUUID(),
      orderName: '나이키 와플 트레이너 2 SD',
      currency: 'CURRENCY_KRW',
      payMethod: 'EASY_PAY',
      isTestChannel: true,
      customer: {
        email: 'customer@example.com',
        phoneNumber: '010-6662-8752',
        fullName: '이관용',
      },
    })

    // 결제 응답 처리
    if (responseUserData?.code != null) {
      return alert(responseUserData.message)
    }

    // Token decrypt 및 서버 통신
    const token = decryptToken('access') // decryptToken에 적절한 인수 전달
    if (!responseUserData) {
      throw new Error('결제 데이터가 없습니다.')
    }
    if (responseUserData.paymentId && responseUserData) {
      const notified = await axiosInstance.post('/payment/complete', {
        orderId,
        paymentId: responseUserData.paymentId,
        headers: { access: token },
        responseUserData,
      })
      console.log(notified, 'notified')
      console.log('성공')
    } else {
      console.log(responseUserData.paymentId)
      console.log(orderId, 'orderId')
    }
  } catch (e) {
    console.log('실패')
  }
}
