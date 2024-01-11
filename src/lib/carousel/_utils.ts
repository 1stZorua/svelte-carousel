export function navigateSlider(carousel: HTMLElement | undefined | null, currentIndex: number, newIndex: number) {
    if (!carousel) return;
    
    const slides = Array.from(carousel.children)
        .filter(c => c.getAttribute("data-component") === "carousel-item");

    const isValidIndex = (index: number) => index >= 0 && index < slides.length;
    if (!isValidIndex(currentIndex) || !isValidIndex(newIndex)) return;


    const gap = parseFloat(window.getComputedStyle(carousel).gap);
    const cardWidth = (slides[currentIndex] as HTMLElement)?.offsetWidth || 0;
    const direction = newIndex > currentIndex ? 1 : -1;

    carousel.scrollTo({
        left: carousel.scrollLeft - direction * (cardWidth + gap),
        behavior: "smooth"
    })
}