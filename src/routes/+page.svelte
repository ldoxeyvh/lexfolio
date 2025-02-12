<script>
    import Repel from '$lib/Repel.svelte';
    import Popout from '$lib/Popout.svelte';
    import TripleShadowImage from '$lib/TripleShadowImage.svelte';
    import placeholder from '$lib/assets/portfolio/matthaei_square.png';
    import { base } from '$app/paths';
    let count = $state(0);
</script>

<div class="w-full my-12 grid grid-cols-1 gap-y-10 lg:gap-y-32 justify-items-center">
    <div class="grid grid-cols-1 gap-4">
        <span class="lg:pe-96 font-rampart font-normal text-7xl md:text-9xl lg:text-[10rem] xl:text-[14rem] text-white text-outline text-center text-triple-shadow">
            ALEXSEY
        </span>
        <span class="lg:ps-96 font-rampart font-normal text-7xl md:text-9xl lg:text-[10rem] xl:text-[14rem] text-white text-outline text-center text-triple-shadow">
            DACOSTA
        </span>
    </div>
    
    <div class="grid grid-cols-2 grid-rows-2 lg:grid-cols-10 lg:grid-rows-7 gap-10 lg:gap-x-10 lg:gap-y-0 justify-items-center lg:w-full lg:px-20">
        <a href="{`${base}/portfolio`}" class="grid lg:grid-rows-8 justify-items-center gap-y-6 lg:col-span-6 lg:row-span-5 lg:w-full lg:h-full">
            <!-- <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32 xl:max-h-48"/>
            </div> -->
            <TripleShadowImage image="" alt="" classList="row-span-7 lg:w-full lg:h-full"/>
            <!-- <Popout text={"portfolio"} size={"3xl"}/> -->
            <span class="font-league-spartan text-lime-800 text-4xl tracking-wider font-black justify-self-center">portfolio</span>
        </a>
        <a href="{`${base}/about-me`}" class="grid lg:grid-rows-5 justify-items-center gap-y-6 lg:col-span-4 lg:row-span-4 lg:w-full lg:h-full">
            <TripleShadowImage image="" alt="" classList="row-span-4 lg:w-full lg:h-full"/>
            <!-- <Popout text={"about me"} size={"3xl"}/> -->
            <span class="font-league-spartan text-lime-800 text-4xl tracking-wider font-black">about me</span>
        </a>
        <a href="{`${base}/projects`}" class="grid lg:grid-rows-4 col-span-2 justify-items-center gap-y-6 lg:col-span-3 lg:row-span-3 lg:w-full lg:h-full">
            <TripleShadowImage image="" alt="" classList="row-span-3 lg:w-full lg:h-full"/>
            <!-- <Popout text={"projects"} size={"3xl"}/> -->
            <span class="font-league-spartan text-lime-800 text-4xl tracking-wider font-black">projects</span>
        </a>
    </div>
</div>
