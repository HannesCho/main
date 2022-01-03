import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.span`
  font-weight: 600;
  color: white;
`;

function Header() {
  return (
    <SHeader>
      <Wrapper>
        <Column>Home</Column>
      </Wrapper>
    </SHeader>
  );
}

export default Header;
