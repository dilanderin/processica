import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 40px 0 24px;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

export const Main = styled.div`
  border: solid 1px ${Colors.grey[30]};
  background-color: #fff;
  border-radius: 8px;
  min-width: 470px;
  padding: 70px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding: 35px 25px;
  }
`;

export const Center = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
