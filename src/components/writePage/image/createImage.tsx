import * as S from "./styleImage";
import styled from "styled-components";
import React, { useState } from "react";

interface StateProps {
  value: {
    title: string[];
    event: string[];
    background: string[];
    people: string[];
    keyword: string[];
  };
}

const CreateImg: React.FC<StateProps> = ({ value }) => {
  return <></>;
};

const Column = styled.div<{ type: string }>`
  display: flex;
  justify-content: ${(prev) => prev.type};
  align-items: center;
`;

export default CreateImg;
