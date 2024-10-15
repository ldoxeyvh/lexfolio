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

<div class="min-h-screen flex flex-col">
    <Nav pages={navPages} />

    <main class="flex-grow p-8"><slot /></main>

    <Footer pages={footerPages} />
</div>

<style>
    :global(html) {
        @apply bg-amber-50
    }
</style>
