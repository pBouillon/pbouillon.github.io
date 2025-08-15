<script lang="ts">
  let { isWorkRelated }: { isWorkRelated: boolean } = $props();
</script>

<div class="mt-3 -mb-3 flex flex-col items-center">
  <div
    class="size-5 rotate-45 rounded-md border-3 border-border bg-accent-background"
  ></div>

  <div
    class="mt-0 w-0 flex-1 border-l-3 border-border"
    class:border-dashed={!isWorkRelated}
  ></div>
</div>
