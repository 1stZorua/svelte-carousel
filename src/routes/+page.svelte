<script lang=ts>
    import { Carousel } from "$lib/index";

    let test: number = 0;
    let x: number = 0;
</script>

<Carousel.Root
    class="gap-20"
    itemOptions={{
        inView: 2,
        toScroll: 3
    }}
    bind:activeSlide={test}
>
    <div class="absolute -top-10 text-3xl">{test}</div>
    {#each Array(6) as _, i}
        <Carousel.Item 
            item={{ 
                type: "image", 
                src: `https://source.unsplash.com/random/${i}`, 
                alt: "Houndour"
            }}
            index={i}
        ></Carousel.Item>
    {/each}
</Carousel.Root>

<!-- <Carousel.Root
    itemOptions={{
        inView: 2,
        toScroll: 3
    }}
    loop
    bind:activeSlide={x}
>
    <div class="absolute -top-10 text-3xl">{x}</div>
    {#each Array(6) as _, i}
        <Carousel.Item 
            item={{ 
                type: "image", 
                src: `https://source.unsplash.com/random/${i}`, 
                alt: "Houndour"
            }}
            index={i}
        ></Carousel.Item>
    {/each}
</Carousel.Root> -->