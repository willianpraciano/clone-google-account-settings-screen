import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border: 0px;
  border-radius: 6px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  margin: auto;
  padding: 2rem;

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid #d3d3d3;

    h1 {
      font-weight: 800;
      color: rgba(0, 0, 0, 0.8);
    }

    p {
      color: rgba(0, 0, 0, 0.7);
      font-weight: 600;
    }
  }

  .informations {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 1rem;
    height: 23rem;
    width: 100%;
    margin-top: 1rem;

    .info-header {
      display: flex;
      flex-direction: column;
      margin: 2rem 2rem 2rem 2rem;
      p {
        margin-top: 0.5rem;
      }
    }

    .button:first-child {
      background-color: red;
    }

    .button {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 3rem;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 0rem 2rem 0rem 0rem;
      margin-left: 2rem;
      margin-bottom: -1px;

      h5 {
        font-size: 12px;
        color: #606469;
      }

      p {
        position: absolute;
        left: 50%;
        font-size: 14px;
        font-weight: 500;
        color: #444;
      }

      svg {
        font-size: 14px;
        color: #444;
        position: absolute;
        right: 5rem;
      }

      :hover {
        background-color: #fafafa;
        padding: 0rem 2rem 0rem 2rem;
        border-bottom: 1px solid #ccc;
        margin-left: 0rem;
        cursor: pointer;
      }
      :active {
        background-color: #ebecec;
      }
    }
  }
`;
