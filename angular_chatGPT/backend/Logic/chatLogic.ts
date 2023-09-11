import { Configuration, OpenAIApi } from "openai";

const chatCall = async (chats: []) => {
  
  //set the configuration according to YOUR own apiKey and organization ID
  //from the openai website
  const configuration = new Configuration({
    organization: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  });

  //uses the openai API, receives and send back the information
  const openAi = new OpenAIApi(configuration);
  const answer = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "you are danielGPT. you help with any questions",
      },
      ...chats,
    ],
  });

  return answer.data.choices[0].message;
};

export { chatCall };
