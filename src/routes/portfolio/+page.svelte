<script>
    import Popout from "$lib/Popout.svelte";

    const imageModules = import.meta.glob(
     '$lib/assets/portfolio/*{.jpg,png,jpeg,gif}',
        {
            eager: true,
            query: {
                enhanced: true
            }
        }
    )  
</script>


<div class="grid grid-cols-1 justify-items-center m-6">
    <Popout text="portfolio" size="6xl"></Popout>
</div>
<div class="columns-2 gap-4 space-y-8 m-4">
    {#each Object.entries(imageModules) as [_path, module]}
        <enhanced:img class="max-w-1/2 mb-4 p-2 border border-slate-400 rounded-xl" src={module.default} alt="TODO" />
    {/each}
</div>
