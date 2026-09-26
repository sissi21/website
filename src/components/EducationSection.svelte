<script lang="ts">
  import type { EducationItem } from '../data/cv';

  export let education: EducationItem[];
</script>

<section id="education" class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm break-inside-avoid">
  <div class="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-5">
    <div class="w-2 h-5 bg-slate-900 rounded-full"></div>
    <h2 class="text-lg sm:text-xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
      Education & Honors
    </h2>
  </div>

  <div class="space-y-4">
    {#each education as item}
      <div class="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1">
            <h3 class="text-sm sm:text-base font-bold text-slate-900">
              {item.institution}
            </h3>
            <p class="text-xs sm:text-sm font-medium text-slate-700 mt-0.5">
              {item.degree}
            </p>
          </div>
          <div class="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-700">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
        </div>

        {#if item.honors}
          <div class="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/90 text-amber-900 text-xs font-semibold shadow-2xs">
            <svg class="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
            <span>{item.honors}</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
