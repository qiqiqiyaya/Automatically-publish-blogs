export class Configuration {

    private static toTest(): boolean {
        return !!(window && window.process && window.process.type);
    }

    private static _isTest: boolean = false;
    private static _isElectron: boolean = false;

    static get isElectron() {
        if (!this._isTest) {
            this._isElectron = this.toTest();
            this._isTest = true;
        }

        return this._isElectron;
    }
}
