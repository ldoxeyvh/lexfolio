<script lang='ts'>
 let { pages = [] } = $props();
</script>

<footer>
    <div>
        Icons placeholder
    </div>
    <ul>
        {#each pages as page}
            <li><a href={page.route}>{page.label}</a></li>
        {/each}
    </ul>
</footer>

<style>
 footer {
     position: fixed;
     left: 0;
     bottom: 0;
     width: 100%;
 }

 li {
     display: inline-block;
     margin-right: 5%
 }
</style>
