<script lang="ts">
    import { accessibility, getCtx, merge } from "$lib/utils/index";
    import type { Writable } from "svelte/store";
    import type { ItemProps, Props } from "../types";

    type $$props = ItemProps;

    let el: $$props["el"];

    let className: string | undefined | null = undefined;
    export { className as class };

    export let index: $$props["index"] = undefined;
    export let item: $$props["item"] = undefined;

    $: test = getCtx("carousel") as Writable<Props>;

    $: commonProps = {
        class: merge(`flex-shrink-0 snap-start ${item?.type === "image" && "object-cover"}`, className),
        style: 
            !className?.includes("w-") 
                ? `width:${100 / ($test.itemOptions?.inView ?? 1)}%;`
                : "",
        "data-component": "carousel-item",
        ...$$restProps,
    }
</script>

{#if item?.type === "image"}
    <img 
        alt={item.alt}
        src={item.src}
        draggable=false
        bind:this={el}
        use:accessibility={"tab"}
        {...commonProps}
    >
{:else}
    <div 
        bind:this={el}
        use:accessibility={"tab"}
        {...commonProps}
    >
        <slot></slot>
    </div>
{/if}