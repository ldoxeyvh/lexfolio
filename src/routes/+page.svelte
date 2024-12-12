<script>
    import Repel from '$lib/Repel.svelte';
    let count = $state(0);
</script>

<button class="font-mono" onclick={() => count++}>
    click meee: {count}
</button>
<button onclick={() => {count=0}}>
    dont click me >:(
</button>

<h1 class="font-nabla text-7xl text-white text-outline triple-shadow">ALEXSEY DACOSTA</h1>
