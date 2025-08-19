<script lang="ts">
  let {
    isCurrentExperience,
    isWorkRelated,
  }: { isCurrentExperience: boolean; isWorkRelated: boolean } = $props();
</script>

<div class="mt-3 -mb-3 flex flex-col items-center">
  <div class="relative">
    {#if isCurrentExperience}
      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="absolute size-5 animate-ping rounded-full bg-border/75"
        ></div>
      </div>
    {/if}

    <div
      class="relative size-5 rotate-45 rounded-md border-3 border-border bg-accent-background"
    ></div>
  </div>
  <div
    class="mt-0 w-0 flex-1 border-l-3 border-border"
    class:border-dashed={!isWorkRelated}
  ></div>
</div>
