<script>
    import Popout from "$lib/Popout.svelte";
	import TripleShadowImage from "$lib/TripleShadowImage.svelte";
    import Botanical from "$lib/assets/portfolio/matthaei_square.png"
    import Environmental from "$lib/assets/portfolio/mifreshwater.jpg"
</script>

<div class="my-8 grid justify-items-center">
    <Popout text={"projects"} size={"6xl"}/>
</div>
<div class="grid grid-cols-2 gap-10 m-5 md:grid md:grid-cols-4">
    <a href="/projects/botanical-gardens" class="grid grid-rows-2 gap-6 justify-items-center">
        <!-- <div class="p-4 rounded-xl triple-shadow">
            <img src={Botanical} alt="" class="max-w-full max-h-full object-contain">
        </div> -->
        <TripleShadowImage image={Botanical} alt="" classList="max-h-32 lg:max-h-48"/>
        <span class="font-league-spartan font-normal text-center">Botanical Gardens Redesign</span>
    </a>
    <a href="/projects/environmental-riso" class="grid grid-rows-2 gap-6 justify-items-center">
        <!-- <div class="p-4 rounded-xl triple-shadow">
            <img src={Environmental} alt="" class="max-w-full max-h-full object-contain">
        </div> -->
        <TripleShadowImage image={Environmental} alt="" classList="max-h-32 lg:max-h-48"/>
        <span class="font-league-spartan font-normal text-center">Enivronmental RISO Project</span>
    </a>
</div>
