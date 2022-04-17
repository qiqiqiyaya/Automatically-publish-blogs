export class MaterIalSelectItem<T> {
    label: string;
    value: string;
    source: T;
    constructor(label: string, value: string, source: T | null = null) {
        this.label = label;
        this.value = value;
        if (source) {
            this.source = source;
        }
    }
}
