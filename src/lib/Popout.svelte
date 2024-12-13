<script>
    let { text } = $props();
</script>

<div class="relative">
    <span class="font-league-spartan text-white text-outline text-3xl absolute top-0.5 left-0">{text}</span>
    <span class="font-league-spartan text-orange-500 text-outline text-3xl absolute top-0 left-0">{text}</span>
    <span class="text-3xl" style="visibility:hidden">{text}</span>
</div>