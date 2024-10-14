<script lang="ts">
 const imageModules = import.meta.glob(
     '$lib/assets/*{.jpg,png,jpeg,gif}',
     {
         eager: true,
         query: {
             enhanced: true
         }
     }
 )
</script>

<h1 class="text-3xl text-center lg:my-5">Welcome to my Portfolio.</h1>
<div class="lg:w-full lg:columns-md">
    {#each Object.entries(imageModules) as [_path, module]}
        <enhanced:img class="m-4" src={module.default} alt="TODO" />
    {/each}
</div>
