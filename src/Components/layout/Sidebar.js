import React from "react";
import styled from "styled-components";
import Compose from "../Buttons/Compose";
import { sidebarButtonItems } from "../../Data/SidebarButtonItems";
const Sidebar = () => {
  return (
    <Wrapper>
      <ComposeWrapper>
        <Compose />
      </ComposeWrapper>
      <SideButtonsWrapper>
        {sidebarButtonItems.map((item) => (
          <SidebarButtonItem>
            {" "}
            {item.icon} {item.text}{" "}
          </SidebarButtonItem>
        ))}
      </SideButtonsWrapper>
      <MeetWrapper>{/* Google Meet */}</MeetWrapper>
      <HangoutsWrapper>{/* Hangouts */}</HangoutsWrapper>
      <IconsWrapper>{/* Bottom Icons */}</IconsWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  border-right: 1px solid lightgrey;
  height: 100vh;
`;
const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;
const SideButtonsWrapper = styled.div``;
const MeetWrapper = styled.div``;
const HangoutsWrapper = styled.div``;
const IconsWrapper = styled.div``;
const SidebarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: grey;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  margin-right: 4px;

  :hover {
    background-color: #f5f7f7;
    cursor: pointer;
  }
`;
