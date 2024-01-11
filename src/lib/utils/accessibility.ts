type EventHandler<T extends Event = Event> = {
    [eventName: string]: (e: T) => void;
};

export function accessibility(node: HTMLElement, role: string) {
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", role);
}

export function events<T extends Event = Event>(node: HTMLElement, handlers: EventHandler<T>) {
    Object.entries(handlers).forEach(([event, handler]) => {
        node.addEventListener(event, handler as EventListenerOrEventListenerObject);
    });

    return {
        destroy() {
            Object.entries(handlers).forEach(([event, handler]) => {
                node.removeEventListener(event, handler as EventListenerOrEventListenerObject);
            });
        }
    };
}