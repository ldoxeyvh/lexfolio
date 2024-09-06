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

<Nav pages={navPages} />

<slot />

<Footer pages={footerPages} />

<style>
 :global(html) {
     @apply bg-amber-50
 }
</style>
