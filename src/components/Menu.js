import React from "react";
import styled from "styled-components";
import MeTube from "../img/me-logo.png";
import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div`
  flex: 1;
  background-color: #004284;
  height: 100vh;
  color: white;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 800;
  margin-bottom: 25px;
  font-size: 27px;
`;

const Img = styled.img`
  height: 75px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const Menu = () => {
    return(
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={MeTube} />
                    T u b e
                </Logo>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon />
                    Subscriptions
                </Item>
                <Item>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
            </Wrapper>
        </Container>
    );
};

export default Menu;