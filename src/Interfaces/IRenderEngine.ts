import IScene from "./IScene";

export default interface IRenderEngine {
    Draw(scene: IScene): number;
}