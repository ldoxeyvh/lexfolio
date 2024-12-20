<script lang="ts">
    import type { PopoutProp } from "./shared"
    let { text, size }: PopoutProp = $props();
</script>

<div class="relative whitespace-nowrap">
    <span class="font-league-spartan font-black tracking-wider text-white text-outline text-{size} absolute top-1 left-0">{text}</span>
    <span class="font-league-spartan font-black tracking-wider text-orange-500 text-outline text-{size} absolute top-0 left-0">{text}</span>
    <span class="font-league-spartan font-black tracking-wider text-{size}" style="visibility:hidden">{text}</span>
</div>