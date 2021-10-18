import React from "react";
import styled from "styled-components";
import {history} from "../redux/configureStore";

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid>
            <HeaderMenu>
                  <React.Fragment>
                    <li onClick={()=>history.push('/signup') } className="header-menu signup">회원가입</li>
                    <li onClick={()=>history.push('/login')} className="header-menu">로그인</li>
                    <li>고객센터 ▼</li>
                  </React.Fragment>
            </HeaderMenu>

            <Logo onClick={()=> {history.push("/")}}></Logo>

            <HeaderCategory>
                <li className="all-category">전체 카테고리</li>
                <li onClick={()=>history.push('/new')} >신상품</li>
                <li onClick={() => history.push('/')} >베스트</li>
                <li onClick={()=>history.push('/cheap')} >알뜰쇼핑 </li>
                <li onClick={()=> history.push('/event')}> 특가/혜택</li>
            </HeaderCategory>
            {/* <HeaderInput>
                
            </HeaderInput> */}
            </Grid>
        </React.Fragment>
    )
}

const Grid = styled.div`
    margin: 0px 400px;
`

const HeaderMenu = styled.ul`
  display: flex;
  font-size: 11px;
  justify-content: flex-end;

  /* position : absolute; */

  & li{
    padding: 0px 24px 0px 0px;
    position: relative;

  }
  & .signup{
    color:#5f0080;
   
  }
`


const Logo = styled.div`
    position: absolute;
    left: 50%;
    top: 2%;
    width: 104px;
    max-width: 100%;
    margin-left: -60px;
    height: 79px;
    background-image: url("https://res.kurly.com/images/marketkurly/logo/logo_x2.png") ;
    background-size: cover;
/* background-position: center; */
`

const HeaderCategory = styled.ul`
    display: flex;
    padding:0px;
    font-weight : bold;
    margin-top : 90px;


  & li{
    padding:0px 75px 0px 0px;
    cursor: pointer;
    display: block;

    &:hover{
      color:purple;
      text-decoration : underline;
    }
  }  

  /* & .all-category:hover::before{
    content:url('https://res.kurly.com/pc/service/common/1908/ico_gnb_all.png');
    position :relative;
    top: 2px;
    margin-right:13px;
    
  } */

  & .all-category::before{
    content:url('https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png');
    position :relative;
    top: 2px;
    margin-right:13px;
  }
`

export default Header;