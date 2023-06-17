import axios from "axios";
const uri = `https://paraphrase-api.goom.ai/api/v1`;
const uri_v2 = `https://paraphrase-api.goom.ai/api/v2`;

export const paraphraseStandardService = async ({ content }) => {
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

export const paraphraseHumanService = async ({ content }) => {
  const res = await axios.post(
    `${uri_v2}/paraphrase/content`,
    { content },
    {
      Headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};
