import React, { useState } from "react";
import Write from "./event/writePage";

const MainWrite = () => {
  const [title, setTitle] = useState<{
    title: string[];
    event: string[];
    background: string[];
    people: string[];
    keyword: string[];
  }>({
    title: [],
    event: [],
    background: [],
    people: [],
    keyword: [],
  });
  return (
    <>
      <Write setState={setTitle} value={title} />
    </>
  );
};

export default MainWrite;
