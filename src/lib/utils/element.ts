type Dimension = "x" | "y" | "all";

export function findClosestElement(
    reference: HTMLElement,
    elements: Element[],
    dimension: Dimension = "all"
) {
    const referenceRect = reference.getBoundingClientRect();

    // Calculate the distances for each element
    const distances = elements.map(el => {
        const elRect = el.getBoundingClientRect();

        switch (dimension) {
            case "x":
                return Math.abs(referenceRect.x - elRect.x);
            case "y":
                return Math.abs(referenceRect.y - elRect.y);
            default:
                return Math.sqrt(
                    Math.pow(referenceRect.x - elRect.x, 2)
                    + Math.pow(referenceRect.y - elRect.y, 2)
                );
        }
    });

    // Find the index of the closest element
    const closestIndex = distances.indexOf(Math.min(...distances));

    return {
        element: elements[closestIndex],
        distance: distances[closestIndex],
        index: closestIndex
    }
}