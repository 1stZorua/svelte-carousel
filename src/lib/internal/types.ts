export type onChange<T> = (value: T) => void;

export type Expand<T> = T extends object
    ? T extends infer O
        ? { [K in keyof O]: O[K] }
        : never
    : T;

export type DOMElement<T extends Element = HTMLDivElement> = Expand<{
    /**
     * Bind to the underlying DOM element of the component
     */
    el?: T;
}>