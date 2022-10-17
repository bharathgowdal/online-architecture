import styled from "styled-components";
import Logo from "./Assets/Logo.png";
import FlexColumn from "./UI/FlexColumn";
import FlexRow from "./UI/FlexRow";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
const Footer = () => {
  return (
    <Section>
      <FlexRow className="footer column">
        <img src={Logo} className="logo" />
        <FlexRow className="pages column">
          <FlexColumn>
            <span>Home</span>
            <span>About</span>
            <span>Process</span>
            <span>Projects</span>
          </FlexColumn>
          <FlexColumn>
            <span>Careers</span>
            <span>Gallery</span>
            <span>Blogs</span>
            <span>Contact</span>
          </FlexColumn>
        </FlexRow>
        <FlexColumn>
          <span>SUBSCRIBE TO NEWSLETTER</span>
          <input placeholder="Enter your email ID" className="email_id" />
          <span>FOLLOW US ON</span>
          <div className="social">
            <FcGoogle className="social_logo" />
            <FaFacebook className="social_logo f_logo" />
            <FiInstagram className="social_logo i_logo" />
            <AiFillTwitterCircle className="social_logo t_logo" />
            <GrPinterest className="social_logo p_logo" />
          </div>
        </FlexColumn>
      </FlexRow>
      <FlexRow className="copyrights column">
        <div>Copyrights 2019 - All rights reserved</div>
        <div>Designed & Developed by EASTSHINE IT SOLUTIONS</div>
      </FlexRow>
    </Section>
  );
};

export default Footer;

const Section = styled.div`
  background-color: #212121;
  color: white;
  margin-top: 2rem;
  width: 100%;
  position: relative;
  left: 0;
  bottom: 0;
  font-size: 12px;
  .footer {
    padding: 20px;
  }
  .logo {
    max-height: 140px;
    padding: 50px;
  }
  .copyrights {
    width: 100%;
    padding: 10px 40px;
    background-color: black;
    justify-content: space-between;
  }
  .email_id {
    width: 50%;
    padding: 10px;
    font-size: 10px;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    margin: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  }
  span {
    padding: 10px;
  }
  .social {
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding: 10px;
    font-size: 10px;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    margin: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  }
  .social_logo {
    font-size: 18px;
    margin: 5px;
  }
  .f_logo {
    color: #446cff;
  }
  .i_logo {
    color: #ff007c;
  }
  .t_logo {
    color: #00c5ff;
  }
  .p_logo {
    color: #d00000;
  }

  @media screen and (max-width: 600px) {
    .column {
      flex-direction: column;
    }
    .pages {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
