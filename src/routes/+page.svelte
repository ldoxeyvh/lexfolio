<script>
    import Repel from '$lib/Repel.svelte';
    import Popout from '$lib/Popout.svelte';
    import placeholder from '$lib/assets/portfolio/matthaei_square.png'
    let count = $state(0);
</script>

<div class="w-full my-12 grid grid-cols-1 gap-y-10 lg:gap-y-32 justify-items-center">
    <span class="font-nabla text-8xl md:text-9xl lg:text-[10rem] xl:text-[14rem] text-white text-outline text-center text-triple-shadow">
        ALEXSEY DACOSTA
    </span>
    <div class="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 gap-10 lg:gap-20 justify-items-center">
        <a href="/portfolio" class="grid justify-items-center gap-y-4">
            <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32 xl:max-h-48"/>
            </div>
            <Popout text={"portfolio"} size={"3xl"}/>
        </a>
        <a href="/about-me" class="grid justify-items-center gap-y-4">
            <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32 xl:max-h-48"/>
            </div>
            <Popout text={"about me"} size={"3xl"}/>
        </a>
        <a href="/projects" class="col-span-2 lg:col-span-1 grid justify-items-center gap-y-4">
            <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32 xl:max-h-48"/>
            </div>
            <Popout text={"projects"} size={"3xl"}/>
        </a>
    </div>
</div>
