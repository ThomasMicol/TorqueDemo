import IRenderEngine from "../Interfaces/IRenderEngine";

export default class BaseRenderEngine implements IRenderEngine {

    Draw(scene: any): number {
        throw new Error("Method not implemented.");
    }

}