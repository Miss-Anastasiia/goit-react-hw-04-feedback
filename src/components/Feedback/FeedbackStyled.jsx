import styled from 'styled-components';
import {font} from "../../styles/mixins";


export const Button = styled.button`
 padding: 15px;
  min-width: 80px;
  border-radius: 10px;
  ${font({ fs: 20, fw: 600, lh: 20 })};
  background-color: ${props => props.theme.colors.buttonBg};
  color: ${props => props.theme.colors.primaryText};
  box-shadow: ${props => props.theme.colors.boxShadow};
  transition: all 250ms ease-in-out;
  ::first-letter {
    text-transform: uppercase;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
  &:hover {
     background: linear-gradient(to bottom, #0033cc 40%, #ffff00 93%);
    transform: scale(1.1);
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 5px 5px ${props => props.theme.colors.grey};
  }
`;
