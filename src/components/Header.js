import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid black;
  background-color: black;
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HomeIcon = styled.div``;
const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const NavLink = styled.li`
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  a {
    text-decoration: none;
    color: white;
  }
`;

function Header() {
  return (
    <SHeader>
      <Wrapper>
        <HomeIcon>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} color="white" />
          </Link>
        </HomeIcon>
        <ListContainer>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/projects">Projects</Link>
          </NavLink>
          <NavLink>
            <Link to="/blogs">Blogs</Link>
          </NavLink>
        </ListContainer>
      </Wrapper>
    </SHeader>
  );
}

export default Header;
