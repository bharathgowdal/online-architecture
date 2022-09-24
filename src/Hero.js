import styled from "styled-components";
import HeroPNG from "./Assets/Hero.png";
import Button from "./UI/Button";
const Hero = () => {
  return (
    <Section>
      <div className="hero_img" />
      <div className="hero_text">
        <div className="main_text">
          ORIGINAL <span>&amp;</span> UNIQUE
        </div>
        <div className="support_text">
          ARCHITECT DESIGNS FOR YOUR LIVING SPACES
        </div>
        <Button>Get Started</Button>
      </div>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  .hero_img {
    width: calc(100% + 2px);
    height: 100vh;
    position: absolute;
    top: 0;
    left: -2px;
    background-image: url(${HeroPNG});
    background-size: cover;
    filter: brightness(30%);
  }
  .hero_text {
    z-index: 1;
    filter: none;
    position: absolute;
    color: #fff;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    font-size: 38px;
    width: 100%;
  }
  .main_text {
    font-weight: 600;
    letter-spacing: 2px;
    span {
      font-size: 48px;
      font-weight: normal;
    }
  }
  .support_text {
    padding-top: 1rem;
    letter-spacing: 2px;
    font-size: 32px;
  }
  Button {
    margin-top: 2rem;
  }
`;
