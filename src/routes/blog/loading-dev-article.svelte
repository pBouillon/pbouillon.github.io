<article class="card my-5 w-96 animate-pulse shadow-xl">
  <figure class="h-40 bg-base-200" />
  <div class="card-body">
    <!-- Mock Tags -->
    <div class="mb-3 flex justify-evenly">
      {#each [1, 2, 3, 4] as _}
        <div class="h-4 w-16 rounded bg-base-300" />
      {/each}
    </div>

    <!-- Mock Title -->
    <p class="h-6 w-full rounded bg-base-300" />
    <p class="h-6 w-2/3 rounded bg-base-300" />

    <!-- Mock Content -->
    <p class="mt-3 h-4 w-full rounded bg-base-200" />
    <p class="h-4 w-full rounded bg-base-200" />
    <p class="h-4 w-full rounded bg-base-200" />

    <!-- Mock Button -->
    <div class="card-actions justify-end pt-3">
      <div class="h-10 w-1/2 bg-primary/50" />
    </div>
  </div>
</article>
