<script lang="ts">
    import { slide } from 'svelte/transition';

    import type { Page } from '$lib/shared';
    import { page } from '$app/stores';
    import { base } from '$app/paths';

    import Flower from '$lib/assets/testflower-01.svg';
    import Hamburger from '$lib/assets/menu-burger.svg';

    interface Props {
        pages: Page[]
    }

    let { pages }: Props = $props();
    // subscribes to page store
    let currentPathname = $derived($page.url.pathname);

    let isDropdownHidden = $state(true);

    function toggleDropdown() {
        isDropdownHidden = !isDropdownHidden;
        console.log('dropdown triggered')
    }

</script>

<nav class="w-full bg-lime-900 grid grid-cols-1 justify-items-center">
    <div class="grid grid-cols-2 p-2 h-16 lg:h-24 w-full max-w-[110rem]">
        <a href="{base}" class="flex items-center gap-2">   
            <span class="place-self-center font-righteous font-normal text-orange-100 text-xl leading-4">Alexsey daCosta</span>
        </a>
        <div class="flex flex-row-reverse gap-8 items-center mx-8">
            <button class="lg:hidden" onclick={toggleDropdown}>
                <img class="h-10" src={Hamburger} alt="">
            </button>
            <!-- <span class="ml-auto self-center lg:hidden">ham</span> -->
            <a href="{`${base}/about-me`}" class=
                "hidden font-righteous
                font-normal text-orange-100 text-xl lg:block"
                >about me</a>
            <a href="{`${base}/portfolio`}" class=
                "hidden font-righteous
                font-normal text-orange-100 text-xl lg:block"
                >portfolio</a>
            <a href="{`${base}/projects`}" class=
                "hidden font-righteous
                font-normal text-orange-100 text-xl lg:block"
                >projects</a>
        </div>
    </div>
    {#if !isDropdownHidden}
        <div transition:slide class="rounded-b-xl absolute h-96 bg-emerald-200 w-full z-10 shadow">
            
        </div>
    {/if }
</nav>





