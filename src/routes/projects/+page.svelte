<script>
    import Popout from "$lib/Popout.svelte";
	import TripleShadowImage from "$lib/TripleShadowImage.svelte";
    import Botanical from "$lib/assets/portfolio/matthaei_square.png";
    import Environmental from "$lib/assets/portfolio/mifreshwater.jpg";
    import { base } from "$app/paths";

    
</script>

<div class="my-8 grid justify-items-center">
    <span class="font-bungee-shade text-5xl text-lime-700 font-semibold">projects</span>
</div>
<div class="grid grid-cols-2 gap-10 m-4 md:grid md:grid-cols-4">
    <a href="{`${base}/projects/botanical-gardens`}" class="grid grid-rows-2 gap-6 justify-items-center">
        <!-- <div class="p-4 rounded-xl triple-shadow">
            <img src={Botanical} alt="" class="max-w-full max-h-full object-contain">
        </div> -->
        <TripleShadowImage image={Botanical} alt="" classList=""/>
        <span class="font-league-spartan font-normal text-center">Botanical Gardens Redesign</span>
    </a>
    <a href="{`${base}/projects/environmental-riso`}" class="grid grid-rows-2 gap-6 justify-items-center">
        <!-- <div class="p-4 rounded-xl triple-shadow">
            <img src={Environmental} alt="" class="max-w-full max-h-full object-contain">
        </div> -->
        <TripleShadowImage image={Environmental} alt="" classList=""/>
        <span class="font-league-spartan font-normal text-center">Enivronmental RISO Project</span>
    </a>
</div>
