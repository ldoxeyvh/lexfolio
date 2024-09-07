<script lang='ts'>
 import type { Page } from '$lib/types'

 interface Props {
     pages: Page[]
 }

 let { pages = [] }: Props = $props();
</script>

<footer class="bg-neutral-50 bottom-0 w-full">
    <div>
        Icons placeholder
    </div>
    <ul class="flex flex-row space-x-4 place-content-center mb-10">
        {#each pages as page}
            <li><a href={page.route}>{page.label}</a></li>
        {/each}
    </ul>
</footer>
