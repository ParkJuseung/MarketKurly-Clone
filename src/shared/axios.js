import axios from "axios";

const instance = axios.create({
  // 백엔드 배포 주소
  // baseURL: "http://서버주소",

  // 제이슨 서버
  baseURL: "http://localhost:4000",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // authorization: `Bearer ${localStorage.getItem("token")}`,
    // "Access-Control-Allow-Origin": true,
  },
});

export const apis = {
  // 메인 상품리스트 불러오기
  getProduct: () => instance.get("/products"),

  // 메인 배너 불러오기
  getBanner: () => instance.get("/banners"),

  // 상세페이지 상품 조회
  getProductDetail: id => instance.get(`products/${id}`),

  // 상세페이지 후기 조회
  getReviews: id => instance.get(`/reviews/${id}`),

  // 상세페이지 후기 삭제
  deleteReviews: id => instance.delete(`/reviews/${id}`),

  // 장바구니 상품리스트 조회
  getCartProduct: () => instance.get("/cart"),

  // 장바구니 상품 추가
  AddProductToCart: () => instance.get("/cart"),

  // 장바구니 상품 삭제
  RemoveCartProduct: () => instance.delete("/cart"),

  // 회원가입
  signUp: user => instance.post("/user", user),

  // 이메일 유효확인
  emailValidation: email => instance.get(`/user/register`, email),

  //로그인
  logIn: id => instance.get(`/user/${id}`),

  //회원정보 요청
  getUser: () => instance.get(`user/info/`),
};
