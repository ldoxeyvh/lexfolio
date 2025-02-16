<script lang='ts'>
    import { draw } from 'svelte/transition';
    import { base } from '$app/paths';
    import type { Page } from '$lib/shared';
    import Instagram from "$lib/assets/instagram.svg";
    import Github from "$lib/assets/github-outline.svg";
    import LinkedIn from "$lib/assets/linkedin.svg";

    interface Props {
        pages: Page[];
    }

    let { pages = [] }: Props = $props();
</script>

<footer class="flex w-full lg:space-x-2 p-2">
    <!-- Filler blocks at large sizes -->
    <div class="hidden lg:block lg:flex-grow rounded-xl bg-orange-600"></div>
    <div class="grid grid-cols-3 gap-2 grid-rows-5 w-full max-w-screen-lg">
        <div class="grid grid-rows-4 gap-1 py-1 justify-items-center rounded-xl bg-lime-700 row-span-5">
            <a href="{`${base}/`}" class="font-righteous text-orange-100 text-2xl transition-all hover:tracking-widest hover:text-yellow-500">home</a>
            <a href="{`${base}/portfolio`}" class="font-righteous text-orange-100 text-2xl transition-all hover:tracking-widest hover:text-yellow-500">portfolio</a>
            <a href="{`${base}/about-me`}" class="font-righteous text-orange-100 text-2xl transition-all hover:tracking-widest hover:text-yellow-500">about me</a>
            <a href="{`${base}/projects`}" class="font-righteous text-orange-100 text-2xl transition-all hover:tracking-widest hover:text-yellow-500">projects</a>
        </div>
        <div class="grid grid-cols-3 rounded-xl bg-yellow-500 col-span-2 row-span-2 place-items-center">
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
        <div class="grid place-items-center col-span-2 row-span-3 rounded-xl bg-orange-600">
            <span class="font-righteous text-6xl text-orange-100 text-center mb-3 transition-all hover:tracking-widest hover:text-yellow-500">
                resume
            </span>
        </div>
    </div>
    <div class="hidden lg:block lg:flex-grow rounded-xl bg-lime-700"></div>
</footer>
