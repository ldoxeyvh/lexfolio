<script>
    import Popout from "$lib/Popout.svelte";
    import Placeholder from "$lib/assets/portfolio/mifreshwater.jpg"
</script>

<div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-5 m-5">
    <div class="my-4 col-span-1 lg:col-span-2 justify-items-center">
        <Popout text={"about me"} size={"6xl"}/>
    </div>
    <div class="rounded-xl">
        <img class="triple-shadow p-4 rounded-xl max-h-96" alt="Alexsey daCosta" src={Placeholder}>
    </div>
    <p class="font-league-spartan font-medium text-xl text-center">
        This is the about me page. this is where I talk about how cool I am and you should hire me
    </p>
</div>