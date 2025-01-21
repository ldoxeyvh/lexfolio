<script lang='ts'>
    import { draw } from 'svelte/transition';
    import type { Page } from '$lib/shared'
    import Instagram from "$lib/assets/instagram.svg"
    import Github from "$lib/assets/github-outline.svg"
    import LinkedIn from "$lib/assets/linkedin.svg"

    interface Props {
        pages: Page[]
    }

    let { pages = [] }: Props = $props();
</script>

<footer class="grid grid-cols-3 gap-2 grid-rows-5 w-full p-2">
    <div class="grid grid-rows-4 gap-1 py-1 justify-items-center rounded-xl bg-orange-500 row-span-5">
        <a href="/" class="font-nabla text-white text-2xl transition-all hover:tracking-widest">home</a>
        <a href="/portfolio" class="font-nabla text-white text-2xl transition-all hover:tracking-widest">portfolio</a>
        <a href="/about-me" class="font-nabla text-white text-2xl transition-all hover:tracking-widest">about me</a>
        <a href="/projects" class="font-nabla text-white text-2xl transition-all hover:tracking-widest">projects</a>
    </div>
    <div class="grid grid-cols-3 rounded-xl bg-amber-400 col-span-2 row-span-2 place-items-center">
        <a href="https://www.instagram.com/alexseydc/">
            <img class="h-8" alt="Instagram" src={Instagram}/>
        </a>
        <a href="">
            <img class="h-8" alt="Github" src={Github}/>
        </a>
        <a href="https://www.linkedin.com/in/alexsey-dacosta-8a18b12b1/">
            <img class="h-8" alt="LinkedIn" src={LinkedIn}/>
        </a>
    </div>
    <div class="grid place-items-center col-span-2 row-span-3 rounded-xl bg-emerald-200">
        <span class="font-nabla text-6xl text-orange-500 text-center mb-3 transition-all hover:tracking-widest">
            resume
        </span>
    </div>
</footer>
