export function scrollToElement(parent: HTMLElement | undefined | null, child: HTMLElement | undefined | null, animate: boolean = false): Promise<void> {
    return new Promise<void>((resolve) => {
        if (!parent || !child) {
            resolve();
            return;
        }

        parent.scrollTo({
            left: child.offsetLeft,
            top: child.offsetTop,
            behavior: animate ? "smooth" : "instant"
        });

        // Wait for the next frame before resolving the promise
        requestAnimationFrame(() => {
            resolve();
        });
    });
}