<script lang="ts">
	import { accessibility, events, merge, setCtx, findClosestElement, createStore } from "$lib/utils/index";
	import { navigateSlider } from "../_utils";
    import type { Props } from "../types";

    type $$props = Props;

    let el: $$props["el"];
    let slides: Element[] = [];

    let className: string | undefined | null = undefined;
    export { className as class };

    export let scrollbar: $$props["scrollbar"] = false; 
    export let scrollDirection: $$props["scrollDirection"] = undefined;
    export let onScrollDirectionChange: $$props["onScrollDirectionChange"] = undefined;
    export let autoplay: $$props["autoplay"] = undefined;
    export let onAutoplayChange: $$props["onAutoplayChange"] = undefined;
    export let animationType: $$props["animationType"] = undefined;
    export let onAnimationTypeChange: $$props["onAnimationTypeChange"] = undefined;
    export let itemOptions: $$props["itemOptions"] = undefined;
    export let onItemOptionsChange: $$props["onItemOptionsChange"] = undefined;
    export let loop: $$props["loop"] = false;
    export let onLoopChange: $$props["onLoopChange"] = undefined;
    export let activeSlide: $$props["activeSlide"] = 0;
    export let onSlideChange: $$props["onSlideChange"] = undefined;
    export let debug: boolean = true;

    $: onSlideChange && onSlideChange(activeSlide);
    $: if (el) slides = Array.from(el.children).filter(c => c.getAttribute("data-component") === "carousel-item");

    const { 
        store,
        updateOption,
        reset 
    } = createStore<$$props>({
        scrollbar,
        scrollDirection,
        onScrollDirectionChange,
        autoplay,
        onAutoplayChange,
        animationType,
        onAnimationTypeChange,
        itemOptions,
        onItemOptionsChange,
        loop,
        onLoopChange,
        activeSlide,
        onSlideChange,
    });

    setCtx("carousel", store);

    $: updateOption("activeSlide", activeSlide);

    function onScroll(e: UIEvent) {
        if (!el) return;

        const test = [];
        for (let i = -1; i <= 1; i++) {
            const index = (slides.length + activeSlide + i) % slides.length;
            test.push(slides[index]);
        }
        
        const currentSlide = findClosestElement(
            el, 
            test,
            "x"
        );

        const newIndex = slides.indexOf(currentSlide.element);
        if (newIndex !== activeSlide) {
            activeSlide = newIndex
        }
    }
    
    let isKeyDown: boolean = false;
    let isLongKeyPress: boolean = false;

    async function onKeyDown(e: KeyboardEvent) {
        if (!e.key.includes("Arrow")) return;
        
        e.preventDefault();

        if (isKeyDown && !isLongKeyPress) {
            console.log("multiple");
            isLongKeyPress = true;
            const increment = e.key === "ArrowLeft" || e.key === "ArrowUp" ? 1 : -1;
            const nextIndex = Math.max(0, Math.min(activeSlide + increment, slides.length - 1));
            navigateSlider(el, activeSlide, nextIndex);
        }
        isKeyDown = true;
    }

    function onKeyUp(e: KeyboardEvent) {
        if (!e.key.includes("Arrow")) return;

        isKeyDown = false;
        isLongKeyPress = false;

        const increment = e.key === "ArrowLeft" || e.key === "ArrowUp" ? 1 : -1;
        const nextIndex = Math.max(0, Math.min(activeSlide + increment, slides.length - 1));

        navigateSlider(el, activeSlide, nextIndex);
    }
</script>

<div class="relative">
    <div 
        class={merge(`flex overflow-x-scroll snap-x snap-always max-w-5xl rounded-lg ${!scrollbar && "no-scrollbar"}`, className)}
        use:accessibility={"tabpanel"}
        use:events={{keyup: onKeyUp, keydown: onKeyDown, scroll: onScroll}}
        bind:this={el} 
        {...$$restProps}
    >
        {#if debug}
            <div class="pointer-events-none absolute flex w-full left-0" style="height:inherit;">
                <span class="w-1 h-full bg-red-500 absolute" style="height:inherit;"></span>
            </div>
        {/if}
        <slot></slot>
    </div>
</div>
