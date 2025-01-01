<script lang="ts">
    import type { Page } from '$lib/shared'
    import { page } from '$app/stores';

    import Flower from '$lib/assets/testflower-01.svg';

    interface Props {
        pages: Page[]
    }

    let { pages }: Props = $props();
    // subscribes to page store
    let currentPathname = $derived($page.url.pathname);
</script>

<!-- mobile nav -->
<nav class="grid grid-cols-2 p-2 h-16 bg-orange-400 rounded-t-xl w-full">
    <a class="flex items-center gap-2" href="/">
        <img class="h-10" src="{Flower}" alt="flower logo">
        <span class="place-self-center font-league-spartan font-semibold text-white text-xl leading-4">Alexsey daCosta</span>
    </a>
    <div class="flex flex-row-reverse gap-8 items-center">
        <span class="ml-auto self-center lg:hidden">ham</span>
        <a href="/about-me" class="hidden font-league-spartan font-semibold text-white text-xl lg:block">about me</a>
        <a href="/portfolio" class="hidden font-league-spartan font-semibold text-white text-xl lg:block">portfolio</a>
        <a href="/projects" class="hidden font-league-spartan font-semibold text-white text-xl lg:block">projects</a>
    </div>

</nav>

<!-- desktop nav (sm and above) -->
<!-- <nav class="hidden sm:block bg-amber-400 rounded-full m-1 lg:p-4">    
    <div class="container mx-auto flex justify-between items-center">
        <div class=" text-lg font-bold flex lg:space-x-4">
            <a href="">Alexsey daCosta</a>
        </div>
        <ul class="flex lg:space-x-4 lg:h-full">
            {#each pages as page: Page}
                <li class="text-sm lg:text-md">
                    <a 
                    class="hover:text-orange-400" 
                    class:text-orange-400={currentPathname === page.route}
                    href={page.route}
                    >
                        {page.label}
                    </a>
                </li>
            {/each}
        </ul>
    </div>    
</nav> -->


