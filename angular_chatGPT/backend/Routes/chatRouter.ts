import express, { NextFunction, Request, Response } from "express";
import { chatCall } from "../Logic/chatLogic";

const chatRouter = express.Router();

chatRouter.post(
  "/chatAnswer",
  async (request: Request, response: Response, next: NextFunction) => {
    //get info so chatGPT could "remember" the chat
    const  chats  = request.body;
    return response.status(200).json(await chatCall(chats));
  }
);

export default chatRouter;
