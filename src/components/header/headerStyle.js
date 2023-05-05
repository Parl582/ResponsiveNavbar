import styled from "styled-components";

 export const Containers = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: blanchedalmond;
  scrollbar-width: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;


export const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  top: 0;
  display: flex;

  left: 0;
`;

export const LeftContainer = styled.div`
  flex: 3;
  background-color: white;
  height: ${(props) => (props.open ? "100%" : 0)};
  opacity: ${(props) => (props.open ? "1" : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 0.3s ease;
  position: relative;

  background-color: white;
`;
export const RightContainer = styled.div`
  flex: 3;
  background-image: url("${(props) => props.img}");
  object-fit: contain;
  height: ${(props) => (props.open ? "100%" : 0)};
  transition: all 0.3s ease;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.89s ease;
  animation: identifier 0.5s reverse;
  @keyframes identifier {
    to {
      transform: translateY(100%);
    }
  }
`;
export const Wrapper = styled.div`
  position: relative;
  padding: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: flex;
    padding: 100px 40px;
  }
`;
export const ListItem = styled.ul`
  width: 100%;
  position: relative;
`;
export const List = styled.li`
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 2px;
  }
  list-style: none;
  padding: 5px 0;
  font-size: 80.08px;
  font-weight: 600;
  line-height: 82.082px;
  letter-spacing: -1px;

  cursor: pointer;

  position: relative;

  &:nth-child(n + 4) {
    padding: 5px 0;
    font-size: 20px;
    font-weight: 600;
    margin-left: 5px;
    line-height: 25px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    padding: 5px 0;

    left: 0;
    overflow: hidden;
    white-space: nowrap;
    color: #d8262c;
    width: 0;
  }

  &:hover {
    ::after {
      animation: move 0.5s linear both;
    }

    @keyframes move {
      to {
        width: 100%;
      }
    }
  }
`;

export const SocialHandle = styled.div`
  width: 100%;

  position: absolute;
  bottom: 10%;
  left: 0;
  padding: 0 100px;
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    overflow: hidden;
    object-fit: contain;
    cursor: pointer;
    filter: grayscale(80%);
  }

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
`;


