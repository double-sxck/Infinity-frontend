// import axios from "axios";

// type Border = {
//   boardId: number;
//   title: string;
//   novel: string;
//   character: string;
//   event: string;
//   background: string;
//   userUniqueId: number;
//   userName: string;
//   created: string;
//   views: number;
//   likes: number;
//   image: string;
// };

// export const getBorder = async (): Promise<Border | undefined> => {
//   try {
//     const response = await axios.get(
//       "http://ec2-43-202-10-202.ap-northeast-2.compute.amazonaws.com/api/board"
//     );
//     console.log(response.data);
//     return response.data; // Assuming the response contains the data you need
//   } catch (error) {
//     // Handle errors, e.g., log them or return a default value
//     console.error("Error fetching data: ", error);
//     return undefined;
//   }
// };
export {};
