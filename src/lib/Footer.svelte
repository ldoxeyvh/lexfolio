<script lang='ts'>
 import type { Page } from '$lib/types'
 import Instagram from "$lib/assets/instagram.svg"
 import LinkedIn from "$lib/assets/linkedin.svg"

 interface Props {
     pages: Page[]
 }

 let { pages = [] }: Props = $props();
</script>

<footer class="rounded-full bg-orange-500 bottom-0 lg:h-32">
    <div class="lg:columns-3 lg:m-5">
        <div class="lg:place-content-center">
            <a class="inline-block" href="https://www.instagram.com/alexseydc/profilecard/?igsh=dWRtcnN6Y2x6ZjRy">
                <img src={Instagram} alt="Instagram" class="lg:h-6 lg:w-6 "/>
            </a>
            <a class="inline-block" href="https://www.linkedin.com/in/alexsey-dacosta-8a18b12b1">
                <img src={LinkedIn} alt="LinkedIn" class="lg:h-6 lg:w-6" />
            </a>
        </div>
        <ul class="flex flex-row space-x-4 place-content-center">
            {#each pages as page}
                <li><a href={page.route}>{page.label}</a></li>
            {/each}
        </ul>
    </div>
</footer>
