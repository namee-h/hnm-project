import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({setAuthenticate ,authenticate}) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = ()=>{
    
    if (authenticate===false){
        navigate('/login')
    }else if(authenticate===true){
        setAuthenticate(false);
        navigate('/')
    }
  }
  const goToInfo = ()=>{
    navigate('/user')
  }
 const search = (event)=>{
    if(event.key ==="Enter"){
        // 입력한 검색어를 읽어와서 
        let keyword = event.target.value
        // console.log("keyword",keyword)
        // url을 바꿔준다
        navigate(`/?q=${keyword}`)
    }
 }
  return (
    <div>
      <div className="navbar">
        <span onClick={goToInfo} className="info">내 정보</span>
        <span className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate===false?"로그인":"로그아웃"}</div>
        </span>
      </div>
      <div className="logo-img">
        <img
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-area">
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input type="text" placeholder="제품검색" onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
