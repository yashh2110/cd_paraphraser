import axios from "axios";
const uri = `https://paraphrase-api.goom.ai/api/v1`;

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
