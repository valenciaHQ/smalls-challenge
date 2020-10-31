import styled, { css } from 'styled-components';

export default styled.div`
  color: ${(props) => props.theme.colors.orange};

  :hover {
    cursor: pointer;
  }

  ${({ fixed }) =>
    fixed &&
    css`
      position: sticky;
      bottom: 0px;
      left: 0px;
      padding: 10px;
      background: ${(props) => props.theme.colors.black};
      border: 1px solid;
      text-align: center;
    `}
`;
