<script>
    import Popout from "$lib/Popout.svelte";
    import Placeholder from "$lib/assets/mifreshwater.jpg"
</script>

<div class="grid grid-cols-2 mt-10 gap-5 m-5">
    <div class="col-span-2 justify-items-center">
        <Popout text={"about me"} size={"6xl"}/>
    </div>
    <div class="triple-shadow bg-orange-500 p-6 rounded-xl">
        <img class="rounded-xl" alt="Alexsey daCosta" src={Placeholder}>
    </div>
    <p class="font-league-spartan font-medium text-xl text-center">This is the about me page. this is where I talk about how cool I am and you should hire me</p>
</div>