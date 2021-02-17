import React from "react";
import styled from "styled-components";
import Compose from "../Buttons/Compose";

const Sidebar = () => {
  return (
    <Wrapper>
      <ComposeWrapper>
        <Compose />
      </ComposeWrapper>
      <SideButtonsWrapper>{/* All the Buttons */}</SideButtonsWrapper>
      <MeetWrapper>{/* Google Meet */}</MeetWrapper>
      <HangoutsWrapper>{/* Hangouts */}</HangoutsWrapper>
      <IconsWrapper>{/* Bottom Icons */}</IconsWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div``;
const ComposeWrapper = styled.div``;
const SideButtonsWrapper = styled.div``;
const MeetWrapper = styled.div``;
const HangoutsWrapper = styled.div``;
const IconsWrapper = styled.div``;
