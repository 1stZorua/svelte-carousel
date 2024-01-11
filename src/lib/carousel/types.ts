import type { DOMElement, onChange } from "$lib/internal/types.js"
import type { ScrollDirection, Autoplay, SlideAnimation, ItemOptions, Item } from "./_types.js"

type Props = {
    /**
     * The show state of the scrollbar.
     */
    scrollbar: boolean,
    /**
     * The scroll direction of the carousel.
     */
    scrollDirection?: ScrollDirection,
    /**
     * A callback function called when the scroll direction changes.
     */
    onScrollDirectionChange?: onChange<ScrollDirection>,

    /**
     * The autoplay state of the carousel.
     */
    autoplay?: Autoplay,
    /**
     * A callback function called when the autoplay changes.
     */
    onAutoplayChange?: onChange<Autoplay>,
    /**
     * The animation type of the slides of the carousel.
     */
    animationType?: SlideAnimation,
    /**
     * A callback function called when the animation type changes.
     */
    onAnimationTypeChange?: onChange<SlideAnimation>,
    /**
     * The item options of the carousel.
     */
    itemOptions?: ItemOptions,
    /**
     * A callback function called when the item options changes.
     */
    onItemOptionsChange?: onChange<ItemOptions>,
    /**
     * The loop state of the carousel.
     */
    loop?: boolean,
    /**
     * A callback function called when the loop value changes.
     */
    onLoopChange?: onChange<boolean>,
    /**
     * The slide that is currently active.
     */
    activeSlide: number,
    /**
     * A callback function called when the active slide changes.
     */
    onSlideChange: onChange<number> | undefined
} & DOMElement<HTMLDivElement>;

type ItemProps = {
    /**
     * The index of the position of the item in the carousel.
     */
    index?: number,
    /**
     * The type of the item.
     */
    item?: Item
} & DOMElement;

export type { Props, ItemProps }