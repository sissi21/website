<script lang="ts">
  export let summary: string[];
  export let highlights: { label: string; value: string; desc: string; icon: string }[];
</script>

<section id="about" class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm transition hover:shadow-md/50">
  <!-- Card Header -->
  <div class="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5">
    <div class="w-2.5 h-6 bg-slate-900 rounded-full"></div>
    <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
      Executive Profile
    </h2>
  </div>

  <!-- Narrative Summary -->
  <div class="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
    {#each summary as paragraph, index}
      <p class={index === summary.length - 1 ? "text-slate-600 text-xs sm:text-sm italic pt-1 border-t border-slate-100/80" : ""}>
        {paragraph}
      </p>
    {/each}
  </div>

  <!-- Key Highlight Metric Cards (Clean 2x2 grid with ample room) -->
  <div class="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
    {#each highlights as item}
      <div class="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition group flex flex-col justify-between min-w-0">
        <div class="min-w-0">
          <div class="flex items-center justify-between gap-1.5 mb-1 min-w-0">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider leading-tight">
              {item.label}
            </span>
            {#if item.icon === 'users'}
              <svg class="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            {:else if item.icon === 'trending'}
              <svg class="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            {:else if item.icon === 'award'}
              <svg class="w-4 h-4 text-amber-500 group-hover:text-amber-600 transition shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            {:else}
              <svg class="w-4 h-4 text-emerald-600 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            {/if}
          </div>
          <div class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-800 transition">
            {item.value}
          </div>
        </div>
        <div class="text-xs text-slate-600 mt-1 leading-snug">
          {item.desc}
        </div>
      </div>
    {/each}
  </div>
</section>
