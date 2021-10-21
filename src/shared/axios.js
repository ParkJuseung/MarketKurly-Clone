import axios from "axios";

const instance = axios.create({
  // 백엔드 배포 주소
  baseURL: "http://15.165.159.211",

  // 제이슨 서버(npx json-server ./data.json --port 4000)
  // baseURL: "http://localhost:4000",
  // headers: {
  //   "content-type": "application/json;charset=UTF-8",
  //   accept: "application/json",
  //   // authorization: `${localStorage.getItem("token")}`,
  //   // "Access-Control-Allow-Origin": "*",
  // },
});

const headers = {
  "content-type": "application/json;charset=UTF-8",
  accept: "application/json",
  authorization: `${localStorage.getItem("token")}`,
  // "Access-Control-Allow-Origin": "http://localhost:3000/",
};

export const apis = {
  // 메인 상품리스트 불러오기
  getProduct: () =>
    instance.get("/products?category1=&category2=&query=", {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  // 메인 배너 불러오기
  getBanner: () => instance.get("/banners", { headers: headers }),

  // 상세페이지 상품 조회
  getProductDetail: (id) =>
    instance.get(`products/${id}`, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  // 상세페이지 후기 추가
  addReviews: (data) => instance.post(`/reviews`, data, { headers: headers }),

  // 상세페이지 후기 조회
  getReviews: (id) => instance.get(`/reviews/${id}`, { headers: headers }),

  // 상세페이지 후기 삭제
  deleteReviews: (id) =>
    instance.delete(`/reviews/${id}`, { headers: headers }),

  // 장바구니 상품리스트 조회
  getCartProduct: () => instance.get("/cart", { headers: headers }),

  // 장바구니 상품 추가
  AddProductToCart: () => instance.get("/cart", { headers: headers }),

  // 장바구니 상품 삭제
  RemoveCartProduct: () => instance.delete("/cart", { headers: headers }),

  // 회원가입
  signUp: (user) =>
    instance.post(`/user/register`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  // 이메일 유효확인
  emailValidation: (email) => instance.get(`/user/register?email=${email}`),

  //로그인
  logIn: (user) =>
    instance.post(`/user/login`, user, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
      },
    }),

  //회원정보 요청
  getUser: () => instance.get(`/user/info`, { headers: headers }),
};
