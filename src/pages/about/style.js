import styled from 'styled-components';
import Color from '../../constants/Color';
import MediaQuery from '../../styles/utils';

const StyledAbout = styled.div`
  line-height: 1.5;
  font-family: 'Karla', sans-serif;
  margin: auto;
  background-color: ${Color.WHITE};
  text-align: center;
  width: 45%;

  ${MediaQuery.xs`padding: 0.8rem 0.4rem;
  `}
  ${MediaQuery.sm`padding: 2rem 0rem;
  `}
  ${MediaQuery.md`padding: 4rem 2rem;
  `}

  padding: 5rem 3rem;
 
  h2 {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    font-weight: 'bold';
    margin:0;
  }
`;

const StyledAboutContainer = styled.div`
text-align: left;
  h3 { 
   margin-top: 0;
  text-align: left;
  text-transform: uppercase;
  }
  p{
    margin-left: auto;
    margin-right: auto;
    color:#333;
    word-wrap:break-word;
    text-align: justify;  
  }
  hr{
    padding: 0px;
    margin: 0px;    
  }
`;
const LinkStyle = styled.a`
border-bottom: 2px solid grey;

a:hover {
  background-color: transparent;
  border-bottom: 2px solid red;
}
`;

export {
  StyledAbout,
  StyledAboutContainer,
  LinkStyle
};