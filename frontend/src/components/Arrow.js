import styled from 'styled-components';

export default styled.div`
  height: 10px;
  width: 10px;
  border: solid ${(props) => props.theme.colors.white};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;
