import axios from "axios";
const uri = `http://54.80.29.81/api/v1`;

export const paraphraseService = async ({ content }) => {
  const res = await axios.post(
    `${uri}/paraphrase/content`,
    { content },
    {
      Headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};
