<script>
    import TripleShadowImage from '$lib/TripleShadowImage.svelte';
    import ImgLink from '$lib/ImgLink.svelte';
    import placeholder from '$lib/assets/portfolio/matthaei_square.png';
    import { base } from '$app/paths';
    import lgPortfolioImg from '$lib/assets/homepage/NEW_PORTFOLIO_DESKTOP.svg';
    import smPortfolioImg from '$lib/assets/homepage/PORTFOLIO_MOBILE.svg';
    import lgProjectsImg from '$lib/assets/homepage/NEW_PROJECTS_DESKTOP.svg'
    import smProjectsImg from '$lib/assets/homepage/PROJECTS_MOBILE.svg'
    import lgAboutImg from '$lib/assets/homepage/NEW_ABOUTME_DESKTOP.svg'
    import smAboutImg from '$lib/assets/homepage/ABOUTME_MOBILE.svg'
    let count = $state(0);
    let hover = $state(false);
</script>

<div class="w-full my-12 grid grid-cols-1 gap-y-10 lg:gap-y-32 justify-items-center">
    <div class="grid grid-cols-1 gap-4">
        <span class="lg:me-96 font-bungee-shade font-semibold text-6xl md:text-9xl xl:text-[11rem] text-orange-600 text-center">
            ALEXSEY
        </span>
        <span class="lg:ms-96 font-bungee-shade font-semibold text-6xl md:text-9xl xl:text-[11rem] text-lime-700 text-center">
            DACOSTA
        </span>
    </div>
    
    <div class="grid grid-rows-3 lg:grid-cols-10 lg:grid-rows-7 gap-10 lg:gap-x-10 lg:gap-y-0 justify-items-center lg:w-full lg:px-20">
        <div class="lg:col-span-6 lg:row-span-5 w-full h-full">
            <ImgLink href={`${base}/portfolio`} text="portfolio" sm={smPortfolioImg} lg={lgPortfolioImg}/>
        </div>
        <div class="lg:col-span-4 lg:row-span-4 w-full h-full">
            <ImgLink href={`${base}/about-me`} text="about me" sm={smAboutImg} lg={lgAboutImg}/>
        </div>
        <div class="lg:col-span-3 lg:row-span-3 w-full h-full">
            <ImgLink href={`${base}/projects`} text="projects" sm={smProjectsImg} lg={lgProjectsImg}/>
        </div>
    </div>
</div>
