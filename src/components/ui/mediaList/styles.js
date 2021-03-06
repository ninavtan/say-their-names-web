import styled from 'styled-components';

const StyledMediaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: center;
  }

  h2 {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    width: 100%;
    text-transform: uppercase;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;

export default StyledMediaList;
