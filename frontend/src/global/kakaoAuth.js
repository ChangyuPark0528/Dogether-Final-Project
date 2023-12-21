const CLIENT_ID = 'b288c56fd31bb6f686ba8a3a39ba7fb2'; // REST API 키
const REDIRECT_URI = 'https://getting.co.kr/oauth/callback/kakao'; //Redirect URI
// const REDIRECT_URI =
//   'http://gettingtest.s3-website.ap-northeast-2.amazonaws.com/oauth/callback/kakao'; //Redirect URI
// const REDIRECT_URI = 'https://happygetting.com/oauth/callback/kakao'; //Redirect URI
// const REDIRECT_URI = 'http://imcute.shop/oauth/callback/kakao'; //Redirect URI

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
// 파라미터 시작은 ? 부터.

//배포후 web플랫폼에서 배포주소 추가해주기.

// 나재성 : 이건 지금 Getting 선배님들 거라서 나중에 수정해야 합니다.
//          이런식으로 노출 되면 안됨요
