<script>
    import Popout from '$lib/Popout.svelte';
    import TripleShadowImage from '$lib/TripleShadowImage.svelte';
    import placeholder from '$lib/assets/portfolio/matthaei_square.png';
    import { base } from '$app/paths';
    let count = $state(0);
    let hover = $state(false);
</script>

<div class="w-full my-12 grid grid-cols-1 gap-y-10 lg:gap-y-32 justify-items-center">
    <div class="grid grid-cols-1 gap-4">
        <span class="lg:me-96 font-bungee-shade font-semibold text-6xl md:text-9xl xl:text-[11rem] text-orange-600 text-center">
            ALEXSEY
        </span>
        <span class="lg:ms-96 font-bungee-shade font-semibold text-6xl md:text-9xl xl:text-[11rem] text-lime-700 text-center">
            DACOSTA
        </span>
    </div>
    
    <div class=" grid grid-rows-3 lg:grid-cols-10 lg:grid-rows-7 gap-10 lg:gap-x-10 lg:gap-y-0 justify-items-center lg:w-full lg:px-20">
        <a href="{`${base}/portfolio`}" class="grid lg:grid-rows-8 justify-items-center group gap-y-6 lg:col-span-6 lg:row-span-5 w-full lg:h-full">
            <!-- <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32 xl:max-h-48"/>
            </div> -->
            <TripleShadowImage image="" alt="" classList="lg:row-span-7 min-w-52 min-h-48 lg:w-full lg:h-full"/>
            <!-- <Popout text={"portfolio"} size={"3xl"}/> -->
            <span class="font-righteous transition-all group-hover:tracking-widest text-lime-700 text-4xl tracking-wider font-black justify-self-center">portfolio</span>
        </a>
        <a href="{`${base}/about-me`}" class="grid lg:grid-rows-5 justify-items-center group gap-y-6 lg:col-span-4 lg:row-span-4 w-full lg:h-full">
            <TripleShadowImage image="" alt="" classList="lg:row-span-4 min-w-52 min-h-48 lg:w-full lg:h-full"/>
            <!-- <Popout text={"about me"} size={"3xl"}/> -->
            <span class="font-righteous transition-all group-hover:tracking-widest text-lime-700 text-4xl tracking-wider font-black">about me</span>
        </a>
        <a href="{`${base}/projects`}" class="grid lg:grid-rows-4 justify-items-center group gap-y-6 lg:col-span-3 lg:row-span-3 w-full lg:h-full">
            <TripleShadowImage image="" alt="" classList="lg:row-span-3 min-w-52 min-h-48 lg:w-full lg:h-full"/>
            <!-- <Popout text={"projects"} size={"3xl"}/> -->
            <span class="font-righteous transition-all group-hover:tracking-widest text-lime-700 text-4xl tracking-wider font-black">projects</span>
        </a>
    </div>
</div>
