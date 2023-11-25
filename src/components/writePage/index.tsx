import { useState } from "react";
import Write from "./event/writePage";
import Gpt from "./gptPage/gpt";
import Cimg from "./image/createImage";
import axios from "axios";

axios.defaults.withCredentials = true;

const MainWrite = () => {
  const [title, setTitle] = useState<{
    page: number;
    postTitle: string;
    novel: string;
    title: string[];
    event: string[];
    background: string[];
    people: string[];
    keyword: string[];
    userName: string;
  }>({
    page: 1,
    postTitle: "",
    novel: "",
    title: [],
    event: [],
    background: [],
    people: [],
    keyword: [],
    userName: "none",
  });
  return (
    <>
      {title.page === 1 ? (
        <Write setState={setTitle} value={title} />
      ) : title.page === 2 ? (
        <Gpt setState={setTitle} value={title} />
      ) : (
        <Cimg value={title} />
      )}
    </>
  );
};

export default MainWrite;
