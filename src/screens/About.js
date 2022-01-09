import styled from "styled-components";

const Title = styled.div`
  color: ${(props) => props.theme.main};
`;

function About() {
  return <Title>About Here</Title>;
}
export default About;
