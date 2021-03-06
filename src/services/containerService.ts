import { interfaces, injectable, inject, Container } from "inversify";
import "reflect-metadata";

import { JsonInterface, JsonService } from './jsonService';
import { DbInterface, DbService } from './dbService';
import { EnvInterface, EnvService } from './envService';
import { BoardInterface, BoardService } from './boardService';
import { TYPES } from '../models/types';


let container = new Container();
container.bind<JsonInterface>(TYPES.JsonInterface).to(JsonService);
container.bind<DbInterface>(TYPES.DbInterface).to(DbService);
container.bind<EnvInterface>(TYPES.EnvInterface).to(EnvService);
container.bind<BoardInterface>(TYPES.BoardInterface).to(BoardService);

export {
    container
};