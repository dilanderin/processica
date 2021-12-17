import styled from 'styled-components';
import Colors from '../../constants/Colors';

const margin = (props, direction) => {
  const mVal = props[direction];

  if (mVal) {
    if (Number.isInteger(mVal)) {
      return `${mVal}px`;
    }
    return mVal;
  }

  return 0;
};

export const ButtonArea = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  border: 2px solid transparent;
  transition: all 500ms ease;
  text-decoration: none;
  background-color: ${Colors.primary};
  color: #ffffff;
  width: 100%;
  height: 56px;
  font-size: 16px;

  margin-bottom: ${(props) => margin(props, 'mb')};
  margin-top: ${(props) => margin(props, 'mt')};
  margin-left: ${(props) => margin(props, 'ml')};
  margin-right: ${(props) => margin(props, 'mr')};

  &:hover,
  &:focus {
    transition: all 500ms ease;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    background-color: #e35600;
  }

  &:focus {
    background-color: #cc4d00;
  }

  &:disabled,
  &[disabled] {
    background-color: ${Colors.grey[50]};
    color: #919191;
  }

  ${({ ghost }) =>
    ghost &&
    `
    background: none;
    border-color: ${Colors.grey[50]};
    color: ${Colors.grey[100]};
    padding: 4px 18px;

    &:hover {
      color: ${Colors.primary};
      background: none;
    }

    &:focus {
      color: ${Colors.primaryDark};
      background: none;
    }

    &:disabled,
    &[disabled] {
      color: ${Colors.grey[70]};
      background: none;
    }
  `}
`;
