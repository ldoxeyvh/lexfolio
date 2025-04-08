<script>
    import Popout from "$lib/Popout.svelte";
	import TripleShadowImage from "$lib/TripleShadowImage.svelte";
    import Botanical from "$lib/assets/portfolio/matthaei_square.png";
    import Environmental from "$lib/assets/portfolio/mifreshwater.jpg";
    import { base } from "$app/paths";
	import Title from "$lib/Title.svelte";
    import ImgLink from '$lib/ImgLink.svelte'
    
</script>

<Title text="projects" />
<div class="grid grid-cols-1 justify-items-center m-8 gap-10 md:grid md:grid-cols-2 max-w-5xl">
    <!-- <a href="{`${base}/projects/botanical-gardens`}" class="grid grid-rows-2 gap-6 justify-items-center">
        <TripleShadowImage image={Botanical} alt="" classList="" hover=false/>
        <span class="font-league-spartan font-normal text-center">Botanical Gardens Redesign</span>
    </a> -->
    <div class="">
        <ImgLink text="Botanical Gardens Redesign" href={`${base}/projects/botanical-gardens`} sm={Botanical} lg={Botanical} sz="text-2xl"/>
    </div>
    <!-- <a href="{`${base}/projects/environmental-riso`}" class="grid grid-rows-2 gap-6 justify-items-center">
        <TripleShadowImage image={Environmental} alt="" classList="" hover=false/>
        <span class="font-league-spartan font-normal text-center">Enivronmental RISO Project</span>
    </a> -->
    <div class="">
        <ImgLink text="Environmental RISO Project" href={`${base}/projects/environmental-riso`} sm={Environmental} lg={Environmental} sz="text-2xl"/>
    </div>
</div>
