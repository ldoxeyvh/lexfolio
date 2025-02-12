<script lang="ts">
    import '../app.css'
    import Nav from '$lib/Nav.svelte';
    import Footer from '$lib/Footer.svelte';
    import { onNavigate } from '$app/navigation';

    const navPages = [
        { label: "home", route: "/" },
        { label: "graphic design", route: "/graphic-design" },
        { label: "projects", route: "/projects"  },
        { label: "about me", route: "/about-me" }
    ]

    const footerPages = navPages

    // 'animation' when navigating between pages
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            })
        });
    });
</script>

<svelte:head>
    <link href="" rel="stylesheet">
</svelte:head>

<div class="grid justify-items-center m-auto lg:rounded-xl bg-orange-100">
    <Nav pages={navPages} />

    <main class="min-h-svh"><slot /></main>

    <Footer pages={footerPages} />
</div>

<style>
    /* :global(html) {
        @apply lg:bg-yellow-500
    } */
</style>
