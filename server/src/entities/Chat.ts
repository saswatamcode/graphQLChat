import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Chat {
  @Field()
  id: string;

  @Field()
  message: string;

  @Field()
  name: string;
}
