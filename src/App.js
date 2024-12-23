import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인 페이지, 상품상세 페이지
// 1-1 네비게이션바바

// 2. 전체상품을 볼 수 있다.

// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다

// 3. 상품 디테일을 눌렀으나, 로그인이 아닌경우에는 로그인페이지가 먼저 나온다

// 4. 로그인이 되있는 경우, 상품디테일 페이지가 나온다.
// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false); //false 면 로그인 안됨, true 면 로그인됨
  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll authenticate={authenticate}/>} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/user" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
