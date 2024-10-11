<script>
    import { svgPosition, cursor } from '/src/stores.ts';
    import { get } from 'svelte/store';

    const repelDistance = 100; // distance to start repelling

    function handleMouseMove(event) {
        cursor.set({ x: event.clientX, y: event.clientY });

        const cursorPos = get(cursor);
        const position = get(svgPosition);

        const dx = cursorPos.x - position.x;
        const dy = cursorPos.y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelDistance) {
            const angle = Math.atan2(dy, dx);
            const repelForce = repelDistance - distance;

            const newX = position.x - Math.cos(angle) * repelForce * 0.05;
            const newY = position.y - Math.sin(angle) * repelForce * 0.05;

            svgPosition.set({
                x: Math.max(Math.min(newX, window.innerWidth - 50), 0),
                y: Math.max(Math.min(newY, window.innerHeight - 50), 0)
            });
        }
    }
</script>

<style>
    svg {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(var(--x)) translateY(var(--y));
    }
</style>

<svelte:window on:mousemove={handleMouseMove} />

{#if $svgPosition}
    <svg
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style="--x: {$svgPosition.x}px; --y: {$svgPosition.y}px;"
    >
        <circle cx="12" cy="12" r="10"></circle>
    </svg>
{/if}
