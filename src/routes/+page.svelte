<script>
 let count = $state(0);
</script>

<button onclick={() => count++}>
    click meee: {count}
</button>
<button onclick={() => {count=0}}>
    dont click me >:(
</button>
