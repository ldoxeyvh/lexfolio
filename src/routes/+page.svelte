<script>
    import Repel from '$lib/Repel.svelte';
    let count = $state(0);
</script>

<button onclick={() => count++}>
    click meee: {count}
</button>
<button onclick={() => {count=0}}>
    dont click me >:(
</button>

<Repel />