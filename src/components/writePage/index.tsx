import React, { useState } from "react";
import Write from "./event/writePage";

const MainWrite = () => {
  const [title, setTitle] = useState<{ title: string[]; event: string[] }>({
    title: [],
    event: [],
  });
  return (
    <>
      <Write setState={setTitle} value={title} />
    </>
  );
};

export default MainWrite;
