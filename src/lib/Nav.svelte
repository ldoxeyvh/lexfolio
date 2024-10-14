<script lang="ts">
 import type { Page } from '$lib/types'

 interface Props {
     pages: Page[]
 }

 let { pages }: Props = $props();
</script>
<nav class="bg-green-100 lg:p-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="text-lg font-bold flex lg:space-x-4">
            <a href="">AJD</a>
            <a href="">Alexsey daCosta</a>
        </div>
        <ul class="flex lg:space-x-4 lg:h-full">
            {#each pages as page: Page}
                {#if page.route == "/"}
                    <li class=""><a data-sveltekit-preload-data="off" class="hover:text-orange-400" 
                        href={page.route}>{page.label}</a></li>
                {:else}
                    <li class=""><a class="hover:text-orange-400" href={page.route}>{page.label}</a></li>
                {/if}
            {/each}
        </ul>
    </div>
</nav>
