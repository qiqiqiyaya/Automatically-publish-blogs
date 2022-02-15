export class Theme {
    name: string;
    primaryColor: string;
    /**
     * left navigation
     */
    siderNavBgColor: string;

    constructor(theme: {
        name?: string,
        primaryColor?: string,
        siderNavBgColor?: string,
    } = {}) {
        this.name = theme.name;
        this.primaryColor = theme.primaryColor;
        this.siderNavBgColor = theme.siderNavBgColor;
    }

    /**
     * get sider navigation style.
     * @returns 
     */
    getSiderNavStyle() {
        return { 'background-color': this.siderNavBgColor };
    }
}
