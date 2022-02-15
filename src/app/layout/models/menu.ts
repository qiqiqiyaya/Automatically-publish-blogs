
/**
 * menu data structure
 */
export class Menu {
    text: string;
    icon: string;
    routerLink?: string;
    children?: Menu[];
    
    expansionIconExpand = false;

    constructor(text: string, icon: string, children?: Menu[], routerLink?: string) {
        this.text = text;
        this.icon = icon;
        this.children = children;
        this.routerLink = routerLink;
    }
}