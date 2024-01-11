/**
 * Carousel types
 */

export type ScrollDirection = "left" | "right" | "up" | "down";

export type SlideAnimation = "none" | "parallax" | "opacity" | "scale";

export type AlignType = "start" | "center" | "end";

// export type ScrollOptions = {
//     scrollbar: boolean,
//     direction: ScrollDirection,
    
// }

export type Autoplay = {
    enabled?: boolean,
    durationMs?: number,
    pauseOnInteraction?: boolean
};

export type ItemOptions = {
    inView?: number,
    toScroll?: number,
    align?: AlignType
}

/**
 * Carousel item types
 */

export type Item = {
    type?: "item" | "image",
    src?: string,
    alt?: string
}