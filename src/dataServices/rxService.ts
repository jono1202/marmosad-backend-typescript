var Rx = require('rxjs');
var board = require('../board.js');
var playerSubject = new Rx.Subject();
var blackCardSubject = new Rx.Subject();
var whiteCardSubject = new Rx.Subject();

export class rxService {

    getPlayerSubject () {
        return playerSubject
    }
    
    getBlackCardSubject () {
        return blackCardSubject;
    }
    
    getWhiteCardSubject () {
        return whiteCardSubject;
    }
}