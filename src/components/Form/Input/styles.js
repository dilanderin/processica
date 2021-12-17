import styled from 'styled-components';
import Colors from '../../../constants/Colors';

export const InputArea = styled.input`
  background-color: ${Colors.grey[20]};
  border-radius: 8px;
  padding: ${(props) => (props.small ? 8 : 16)}px 16px;
  color: ${Colors.grey[100]};
  box-sizing: border-box;
  border: 2px solid ${Colors.grey[20]};
  transition: all 500ms ease;
  font-size: ${(props) => (props.small ? 14 : 16)}px;
  width: 100%;
  max-width: ${(props) => props.small && '350px'};

  &::placeholder {
    color: ${Colors.grey[60]};
  }

  &:hover,
  &:focus {
    transition: all 500ms ease;
  }

  &:hover {
    border-radius: 8px;
    background-color: ${Colors.grey[10]};
    border-color: ${Colors.grey[40]};
  }

  &:focus,
  &:not(:placeholder-shown) {
    background-color: #ffffff;
    border-color: ${Colors.primary};
    color: ${Colors.grey[100]};
  }

  &:disabled,
  &[disabled] {
    background-color: ${Colors.grey[10]};
    border-color: ${Colors.grey[10]};
    color: ${Colors.grey[50]};
  }
`;

export const Title = styled.div`
  font-size: 14px;
  margin-left: 8px;
  margin-bottom: 4px;
  color: #484848;
`;

export const Container = styled.div`
  margin-bottom: ${(props) => (!props.mb ? '16px' : `${props.mb}px`)};
  margin-top: ${(props) => (!props.mt ? 0 : `${props.mt}px`)};
  margin-bottom: ${(props) => props.small && 0};
  width: 100%;
`;
