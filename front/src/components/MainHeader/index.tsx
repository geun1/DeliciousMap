import styled from 'styled-components'
import { BsMap } from 'react-icons/bs';
interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <Container>
        <div>
            <h1>
                <a href='../MainPage/index.tsx'>
                    <BsMap size={60}/>
                </a>
            </h1>
        </div>
        <div id="search_cont">
            <form method="get">
                <div id="t_search">
                    <input placeholder='Enter'/>
                    <button/>
                </div>
            </form>
        </div>
        <div id="login_join_group">
            <a href="#none">로그인</a>
            <span/>
            <a href="#none">회원가입</a>
        </div>
    </Container>
  )
}

export default MainHeader;

const Container = styled.header`
    width:100%;
    height: 74px;
    padding: 40px, 40px, 40px;
    background-color: #fff;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
    a {
        color: inherit;
        text-decoration: none;
        margin: 0;
        padding: 0;
        border: 0;
    }
    form {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    #t_search {
        position:relative;
        max-width: 562px;
        min-width: 380px;
        height: 42px;
    }
    input {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 22px 2px 22px;
        border-radius: 21px;
        border: none;
        background: transparent;
        background-position: right 24px bottom 10px;
        background-size: 22px;
        background-color: #eee;
        box-sizing: border-box;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.75px;
        line-height:1.13;
        color: #202020;


    }
    button {
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    #login_join_group {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px 10px;
    }
`