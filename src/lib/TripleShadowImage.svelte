<script lang="ts">
    let { image, alt, classList } = $props();
</script>

<div class={ classList + " triple-shadow-animate" }>
    <div class="rounded-xl p-3 h-full w-full">
        <img src={image} alt={alt} class="max-h-32 lg:max-h-48">
    </div>
</div>

<style>
    .triple-shadow-animate > div {
        position: relative;
        top: 0;
        left: 0;
        background-color: var(--yellow-500);
        /* filter: 
            drop-shadow(4px 4px var(--amber-400))
            drop-shadow(4px 4px var(--emerald-200)); */
        box-shadow: 8px 8px var(--orange-600), 16px 16px var(--lime-800);
        transition:
            top 0.2s ease,
            left 0.2s ease,
            box-shadow 0.2s ease;
    }

    .triple-shadow-animate:hover > div {
        top: -10px;
        left: -10px;
        /* filter:
            drop-shadow(15px 15px var(--orange-600))
            drop-shadow(15px 15px var(--lime-800)); */
        box-shadow: 13px 13px var(--orange-600), 26px 26px var(--lime-800);
    }
</style>