<script>
    import Repel from '$lib/Repel.svelte';
    import Popout from '$lib/Popout.svelte';
    import placeholder from '$lib/assets/matthaei_square.png'
    let count = $state(0);
</script>

<div class="w-full my-12 grid grid-cols-1 gap-y-10 justify-items-center">
    <span class="font-nabla text-8xl text-white text-outline text-center text-triple-shadow">
        ALEXSEY DACOSTA
    </span>
    <div class="grid grid-cols-2 grid-rows-2 gap-10 justify-items-center">
        <a href="/portfolio" class="grid justify-items-center gap-y-4">
            <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32"/>
            </div>
            <Popout text={"portfolio"} size={"3xl"}/>
        </a>
        <a href="/about-me" class="grid justify-items-center gap-y-4">
            <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32"/>
            </div>
            <Popout text={"about me"} size={"3xl"}/>
        </a>
        <a href="/projects" class="col-span-2 grid justify-items-center gap-y-4">
            <div class="triple-shadow rounded-xl p-3">
                <img src={placeholder} alt='' class="max-h-32"/>
            </div>
            <Popout text={"projects"} size={"3xl"}/>
        </a>
    </div>
</div>
