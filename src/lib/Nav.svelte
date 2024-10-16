<script lang="ts">
    import type { Page } from '$lib/types'
    import { page } from '$app/stores';

    interface Props {
        pages: Page[]
    }

    let { pages }: Props = $props();
    // subscribes to page store
    let currentPathname = $derived($page.url.pathname);
</script>

<nav class="bg-green-100 lg:p-4">
    <div class="container mx-auto flex justify-between items-center">
        <div class="text-lg font-bold flex lg:space-x-4">
            <a href="">AJD</a>
            <a href="">Alexsey daCosta</a>
        </div>
        <ul class="flex lg:space-x-4 lg:h-full">
            {#each pages as page: Page}
                <li class=""><a class="hover:text-orange-400" class:text-orange-400={currentPathname === page.route}
                    href={page.route}>{page.label}</a></li>
            {/each}
        </ul>
    </div>
</nav>
