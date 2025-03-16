<script lang="ts">
    let { image, alt, classList, hover } = $props();
    let tripleShadow = $derived(hover ? "triple-shadow-hover" : "")
</script>

<div class={ classList + " w-full"}>
    <img src={image} alt={alt} class="triple-shadow-no-hover {tripleShadow} rounded-xl p-3 h-full w-full">
</div>

<style>
    .triple-shadow-no-hover {
        position: relative;
        top: 0;
        left: 0;
        background-color: var(--yellow-500);
        /* filter: 
            drop-shadow(4px 4px var(--amber-400))
            drop-shadow(4px 4px var(--emerald-200)); */
        box-shadow: 8px 8px var(--orange-600), 16px 16px var(--lime-700);
        transition:
            top 0.2s ease,
            left 0.2s ease,
            box-shadow 0.2s ease;
    }

    .triple-shadow-hover {
        top: -10px;
        left: -10px;
        /* filter:
            drop-shadow(15px 15px var(--orange-600))
            drop-shadow(15px 15px var(--lime-800)); */
        box-shadow: 13px 13px var(--orange-600), 26px 26px var(--lime-700);
    }
</style>