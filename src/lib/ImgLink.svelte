<script>
	import TripleShadowImage from "./TripleShadowImage.svelte";
    // import { breakpoints } from "../state.svelte";

    let { text, href, sm, lg, sz="4xl" } = $props();
    let hover = $state(false);
    let captionTracking = $derived(hover ? "tracking-widest" : "tracking-wider");
    let textSize = $derived(`text-${sz}`);
</script>

<a href={href} class="grid justify-items-center gap-y-6" 
    onmouseenter={() => hover = true}
    onmouseleave={() => hover = false}
>
    <TripleShadowImage image={lg} alt="" hover={hover} classList="hidden lg:block lg:w-full lg:h-full"/>
    <TripleShadowImage image={sm} alt="" hover={hover} classList="lg:hidden lg:w-full lg:h-full"/>
    <!-- {#if } TODO make this switch between the two types of image -->
    <span class="font-righteous transition-all {captionTracking} text-lime-700 {textSize} text-center font-black justify-self-center">
        {text}
    </span>
</a>