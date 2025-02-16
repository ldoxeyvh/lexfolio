<script lang="ts">
    import { slide } from 'svelte/transition';
    import { bounceInOut, bounceIn, bounceOut, cubicInOut, backInOut, sineInOut } from 'svelte/easing';
    import { afterNavigate } from '$app/navigation';

    import type { Page } from '$lib/shared';
    import { page } from '$app/stores';
    import { base } from '$app/paths';

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

    // Resets mobile nav dropdown on navigation
    afterNavigate(() => {
        isDropdownHidden = true;
    })

</script>

<nav class="w-full bg-lime-900 grid grid-cols-1 justify-items-center">
    <div class="grid grid-cols-2 p-2 h-16 lg:h-24 w-full max-w-[110rem] px-4">
        <a href="{base}" class="flex items-center gap-2">   
            <span class="place-self-center font-righteous font-normal text-orange-100 text-xl leading-4">
                LOGO
            </span>
        </a>
        <div class="flex flex-row-reverse gap-8 items-center ">
            <button class="lg:hidden" onclick={toggleDropdown} aria-label="navDropdown">
                {#if isDropdownHidden}
                    <i class="text-orange-100 text-3xl fa-solid fa-bars"></i>
                {:else}
                    <i class="text-orange-100 text-3xl fa-solid fa-xmark"></i>
                {/if}
            </button>
            <!-- <span class="ml-auto self-center lg:hidden">ham</span> -->
            <a href="{`${base}/about-me`}" class=
                "hidden font-righteous hover:text-yellow-500
                font-normal text-orange-100 text-xl lg:block"
                >about me</a>
            <a href="{`${base}/portfolio`}" class=
                "hidden font-righteous hover:text-yellow-500
                font-normal text-orange-100 text-xl lg:block"
                >portfolio</a>
            <a href="{`${base}/projects`}" class=
                "hidden font-righteous hover:text-yellow-500
                font-normal text-orange-100 text-xl lg:block"
                >projects</a>
        </div>
    </div>
    {#if !isDropdownHidden}
        <div transition:slide={{duration: 500, easing:cubicInOut }} class=" relative h-96 bg-lime-800 w-full">
            
        </div>
    {/if }
</nav>





