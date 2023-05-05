import React, { useState } from "react";
import { Containers } from "./headerStyle";
import styled from "styled-components";
import MenuBar from "./MenuBar";

const Headers = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  padding: 20px;
`;
const Humbugger = styled.div`
  font-size: 50px;

  color: #b30000;
  border-radius: 999px;
  padding: 10px;
  width: 60px;
  height: 60px;
  background-color: #3e3e3e;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
  display: flex;
  flex-flow: column nowrap;
  gap: 6px;

  span {
    width: 2rem;
    height: 3px;
    background-color: white;
    transform-origin: 3px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translate(100%)" : "translate(0)"};
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setTimeout(() => {
        setOpen((prev) => !prev);
      }, 300);
    } else {
      setOpen((prev) => !prev);
    }
  };
  return (
    <>
      <Headers>
        <Humbugger onClick={handleOpen} open={open}>
          <span></span>
          <span></span>
          <span></span>
        </Humbugger>
      </Headers>
      <MenuBar open={open} />
    </>
  );
};

export default Header;
