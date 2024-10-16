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

<p style="font-family: 'Nabla', system-ui;">testing font</p>

<Repel />