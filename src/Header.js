import styled from "styled-components";
import Logo from "./Assets/Logo.png";
import FlexRow from "./UI/FlexRow";
import FlexColumn from "./UI/FlexColumn";
import { HiUser } from "react-icons/hi";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Section>
      <div className="nav_container">
        <div className="logo_container">
          <img src={Logo} className="logo" />
        </div>
        <div className="nav_right">
          <ul className="nav_items_wrapper">
            <li className="nav_item">
              {!click ? (
                <FlexRow>
                  <span>
                    <HiUser />
                  </span>
                  LOGIN / SIGNUP
                </FlexRow>
              ) : (
                <Menu>
                  <FlexColumn>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Login</li>
                    </ul>
                  </FlexColumn>
                </Menu>
              )}
            </li>
            <div className="menu" onClick={handleClick}>
              {click ? (
                <FlexRow>
                  <FaTimes />
                </FlexRow>
              ) : (
                <FlexRow>
                  <FaBars /> <span>Menu</span>
                </FlexRow>
              )}
            </div>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Header;
const Menu = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40vw;
  background: rgba(249, 235, 0, 0.3);
  border-radius: 10px;
  padding: 2rem;
  height: 98vh;
  li {
    padding: 2rem;
    font-size: 20px;
  }
`;
const Section = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  .nav_container {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  .logo_container {
    padding: 1rem;
  }
  .logo {
    max-height: 50px;
    padding: 5px;
  }
  .nav_right {
    display: flex;
    margin-right: 2rem;
  }
  .nav_items_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-content: flex-end;
  }
  .nav_item {
    list-style: none;
    font-size: 14px;
    padding-right: 4rem;
    cursor: pointer;
    color: white;
  }
  .nav_item span {
    font-size: 18px;
    margin-right: 10px;
    color: rgb(254, 152, 0);
    color: linear-gradient(
      90deg,
      rgba(254, 152, 0, 1) 0%,
      rgba(255, 235, 0, 1) 100%
    );
  }
  .menu {
    color: white;
    z-index: 2;
  }
  .menu span {
    padding-left: 10px;
  }
`;
