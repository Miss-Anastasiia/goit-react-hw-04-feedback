import styled from 'styled-components';
import { font } from 'styles/mixins';

export const List = styled.ul`
  padding: 20px;
  max-width: 320px;
  border-radius: 10px;
  ${font({ fs: 20, fw: 500, lh: 20 })};
  background-color: ${props => props.theme.colors.buttonBg};
  color: ${props => props.theme.colors.primaryText};
  box-shadow: ${props => props.theme.colors.boxShadow};
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: nowrap;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;


// .container {
//   display: flex;
//   flex-wrap: wrap;
// }

// .item {
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   text-align: center;
//   min-width: 100px;
//   height: 70px;
//   padding: 10px;
//   border: 1px solid rgb(255, 255, 255);
//   margin-bottom: 15px;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   background: linear-gradient(to bottom, #cc0000 0%, #ff99cc 100%);
//   border: 0 solid #e5e7eb;
//   border-radius: 5px;
//   font-size: 20px;
//   font-weight: 700;
//   line-height: 1.75rem;
//   margin-right: 15px;
// }

// .item p:last-child {
//   color: rgb(255, 255, 255);
// }

// @media (min-width: 768px) {
//   .item {
//     padding: 0.75rem 3rem;
//     font-size: 1.25rem;
//   }
// }
