import { Mutation, Query, Resolver, Arg } from "type-graphql";
import { Chat } from "../entities/Chat";

const chats: Chat[] = [];

@Resolver()
export class ChatResolver {
  @Query(() => [Chat])
  getChats(): Chat[] {
    return chats;
  }

  @Mutation(() => Chat)
  createChat(@Arg("name") name: string, @Arg("message") message: string): Chat {
    const chat = { id: chats.length + 1, name, message };
    chats.push(chat);
    return chat;
  }
}
