import styled from "styled-components";

const NovCard = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <CardBackground></CardBackground>
      <FlexBox>
        <Title>제목</Title>
        <Writer>김재목</Writer>
      </FlexBox>
    </div>
  );
};

export default NovCard;

const CardBackground = styled.div`
  background-color: #d9d9d9;
  height: 16em;
  width: 15em;
  margin-bottom: 5px;
  border-radius: 20px;
  background-image: url();
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  height: 1.5em;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Writer = styled.div`
  padding-left: 0.3em;
  padding-right: 0.3em;
  height: 1.5em;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
