<script>
    import Repel from '$lib/Repel.svelte';
    import Popout from '$lib/Popout.svelte';
    import placeholder from '$lib/assets/matthaei_square.png'
    let count = $state(0);
</script>

<div class="w-full mt-4 grid grid-cols-1 gap-y-10 justify-items-center">
    <span class="font-nabla text-8xl text-white text-outline text-center triple-shadow">
        ALEXSEY DACOSTA
    </span>
    <div class="grid grid-cols-2 grid-rows-2 gap-10 justify-items-center">
        <a href="/portfolio" class="grid justify-items-center gap-y-4">
            <div class="triple-shadow rounded-xl bg-orange-500 p-3">
                <img src={placeholder} alt='' class="max-h-32"/>
            </div>
            <!-- <span class="text-3xl text-orange-500 text-outline popout-orange-500">portfolio</span> -->
            <Popout text={"portfolio"} />
        </a>
        <a href="/about-me">
            <img src={placeholder} alt='' class="max-h-32"/>
        </a>
        <a href="/projects">
            <img src={placeholder} alt='' class="max-h-32"/>
        </a>
    </div>
</div>
