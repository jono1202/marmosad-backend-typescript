// import { jsonService, rxService } from '../barrels/services'
import { TYPES } from "../models/types";
import { JsonInterface, JsonService } from "../services/jsonService";
import { RxHandler } from "../barrels/handlers";
import { Socket } from "socket.io";

export default class PlayerHandler {
    public jsonService: JsonInterface;
    public rxHandler: RxHandler;
    private playerSubject: any;

    constructor(
        _jsonService: JsonService,
    ) {
        this.jsonService = _jsonService;
        this.rxHandler = new RxHandler(this.jsonService.dbService);
        this.playerSubject = this.rxHandler.getPlayerSubject()
    }

    createPlayer (playerName: string, socket: Socket, socketid: string): void {
        let self = this;
        this.jsonService.createPlayer(function (hand) {
            self.playerSubject.next({
                data: {
                    "playerName": playerName,
                    "playerId": socketid,
                    "hand": hand,
                    "isJudge": false, // Do we still need this field? I think the currentJudge in display is good enough?
                    "score": 0
                },
                socket: socket
            });
        }, socketid);
    }
}
