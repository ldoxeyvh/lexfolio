<script lang="ts">
 const imageModules = import.meta.glob(
     '$lib/images/*{.jpg,png,jpeg,gif}',
     {
         eager: true,
         query: {
             enhanced: true
         }
     }
 )
</script>

<h1 class="text-3xl text-center my-5">Welcome to my Portfolio.</h1>
<div class="w-full columns-md">
    {#each Object.entries(imageModules) as [_path, module]}
        <enhanced:img class="m-4" src={module.default} alt="TODO" />
    {/each}
</div>
