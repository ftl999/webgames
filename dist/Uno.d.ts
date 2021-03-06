import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';
import { BaseGameGUI, CardGame, Player, VotingUI } from './CardGame';
import { GameState, GameInfo, SVEAccount, GameRequest } from 'svebaselib';
import { SVEGame } from './BaseGame';
declare class UNOGUI extends BaseGameGUI {
    protected GameStateText: GUI.TextBlock;
    AVotingUI: VotingUI;
    GameID: String;
    Game: SVEGame;
    protected EndRoundBtn: GUI.Button;
    OnEndRoundClick: () => void;
    constructor(scene: BABYLON.Scene);
    protected GetTextLine(player: Player): string;
    protected OnClickedEndRound(): void;
    ShowEndRoundBtn(val: boolean): void;
    ShowGameState(gs: GameState): void;
    ShowColorWish(ug: UNO): void;
    HideGameState(): void;
}
declare class UNO extends CardGame {
    gameType: string;
    protected isSetup: boolean;
    protected GUI: UNOGUI;
    protected bIsSuspended: Boolean;
    constructor(info: GameInfo);
    CheckGameState(): GameState;
    StartLocalPlayersRound(): void;
    OnEndLocalRound(): void;
    onStart(): void;
    CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene;
    OnForceEndRound(): void;
    Tick(): void;
    protected onPlayersRoundBegin(player: any): void;
    onJoined(id: SVEAccount): void;
    protected OnGameStateChange(state: any): void;
    onRequest(result: GameRequest): void;
    protected onNotify(notification: string, invoker: Player, target?: Player): void;
    OnSelect(evt: PointerEvent, pickInfo: BABYLON.PickingInfo): void;
    MinPlayers(): number;
    MaxPlayers(): number;
}
export { UNO };
//# sourceMappingURL=Uno.d.ts.map