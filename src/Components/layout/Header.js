import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <wrapper>
      <logoWrapper>
        <div>
          <MenuIcon />
        </div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
      </logoWrapper>
    </wrapper>
  );
}

export default Header;

const wrapper = styled.div``;
const logoWrapper = styled.div``;
