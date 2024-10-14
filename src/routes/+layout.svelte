<script lang="ts">
 import '../app.css'
 import Nav from '$lib/Nav.svelte';
 import Footer from '$lib/Footer.svelte';

 const navPages = [
     { label: "home", route: "/" },
     { label: "graphic design", route: "/graphic-design" },
     { label: "projects", route: "/projects"  },
     { label: "about me", route: "/about-me" }
 ]

 const footerPages = navPages
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
