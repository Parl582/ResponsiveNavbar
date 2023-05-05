import React, { useState } from "react";

import img from "../../assets/asset 7.jpeg";
import img2 from "../../assets/asset 1.jpeg";
import img3 from "../../assets/asset 2.jpeg";
import img4 from "../../assets/asset 3.jpeg";
import img5 from "../../assets/asset 4.jpeg";
import img7 from "../../assets/asset 11.jpeg";
import img6 from "../../assets/asset 9.jpeg";
import {
  Img,
  LeftContainer,
  List,
  ListItem,
  MainContainer,
  RightContainer,
  SocialHandle,
  Wrapper,
} from "./headerStyle";

const MenuBar = ({ open }) => {
  const data = ["Services", "About", "Work", "News", "Blog", "Contact"];

  const [imageChange, setImage] = useState("Services");
  return (
    <>
      <MainContainer open={open}>
        <LeftContainer open={open}>
          <Wrapper open={open}>
            <ListItem>
              {data?.map((elm) => (
                <List key={elm} text={elm} onMouseEnter={() => setImage(elm)}>
                  {elm}{" "}
                </List>
              ))}
            </ListItem>

            <SocialHandle>
              <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" />
              <img src="https://img.icons8.com/fluency/48/null/instagram-new.png" />
            </SocialHandle>
          </Wrapper>
        </LeftContainer>
        <RightContainer
          open={open}
          img={
            "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
        >
          {imageChange == data[0] && <Img src={img} />}
          {imageChange == data[1] && <Img src={img4} />}
          {imageChange == data[2] && <Img src={img2} />}
          {imageChange == data[3] && <Img src={img4} />}
          {imageChange == data[4] && <Img src={img5} />}
          {imageChange == data[5] && <Img src={img6} />}
        </RightContainer>
      </MainContainer>
    </>
  );
};

export default MenuBar;
