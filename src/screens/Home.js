import styled from "styled-components";

const Title = styled.div`
  color: ${(props) => props.theme.main};
`;

function Home() {
  return <Title>Home Here</Title>;
}
export default Home;
