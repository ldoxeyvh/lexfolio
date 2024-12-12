<script lang="ts">
    import type { Page } from '$lib/types'
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
<nav class="drop-shadow p-2 h-16 flex flex-row sm:hidden bg-emerald-200 rounded-xl">
    <a class="flex flex-row basis-1/2" href="/">
        <img class="basis-1/2" src="{Flower}" alt="flower logo">
        <span class="justify-self-center">Alexsey daCosta</span>
    </a>
    <span class="ml-auto">ham</span>
</nav>

<!-- desktop nav (sm and above) -->
<nav class="hidden sm:block bg-amber-400 rounded-full m-1 lg:p-4">    
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
</nav>


