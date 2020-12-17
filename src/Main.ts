import * as Konva from 'konva'
import BaseRenderEngine from './Classes/BaseRenderEngine';
import IRenderEngine from './Interfaces/IRenderEngine'

class App {
    protected _render: IRenderEngine;

    constructor(renderer: IRenderEngine) {
        this._render = renderer;
    }

    Prod() {
        console.log("oh god", this._render);
    }
}

const renderer = new BaseRenderEngine();

const app = new App(renderer);

function ClickEvent() {
    app.Prod();
}
