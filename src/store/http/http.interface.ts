import { ListGameParams } from "../features/game/game.interface";
import { ListNewsParamsInterface } from "../features/news/news.interface";

export interface HttpGet {
  url: string;
  params?: ListGameParams | ListNewsParamsInterface;
}
