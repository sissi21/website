<script lang="ts">
  import type { ExperienceItem } from '../data/cv';

  export let experiences: ExperienceItem[];

  let activeFilter = 'All';

  $: filteredExperiences = experiences.filter(exp => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Google' && exp.company.includes('Google')) return true;
    if (activeFilter === 'Analytics' && (exp.company.includes('Alstom') || exp.tag?.includes('Analytics'))) return true;
    if (activeFilter === 'Leadership' && (exp.isOngoing || exp.role.includes('Captain') || exp.role.includes('Volunteer'))) return true;
    return true;
  });

  function formatBullet(bullet: string) {
    const colonIndex = bullet.indexOf(':');
    if (colonIndex !== -1 && colonIndex < 35) {
      const prefix = bullet.substring(0, colonIndex + 1);
      const rest = bullet.substring(colonIndex + 1);
      return { prefix, rest };
    }
    return { prefix: '', rest: bullet };
  }
</script>

<section id="experience" class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
    <div class="flex items-center gap-3">
      <div class="w-2.5 h-6 bg-slate-900 rounded-full"></div>
      <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
        Work Experience
      </h2>
    </div>

    <!-- Filter Buttons (no-print) -->
    <div class="flex flex-wrap items-center gap-1.5 no-print text-xs">
      <button
        type="button"
        on:click={() => activeFilter = 'All'}
        class="px-3 py-1 rounded-full font-medium transition cursor-pointer {activeFilter === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        All ({experiences.length})
      </button>
      <button
        type="button"
        on:click={() => activeFilter = 'Google'}
        class="px-3 py-1 rounded-full font-medium transition cursor-pointer {activeFilter === 'Google' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        Google via Vaco
      </button>
      <button
        type="button"
        on:click={() => activeFilter = 'Analytics'}
        class="px-3 py-1 rounded-full font-medium transition cursor-pointer {activeFilter === 'Analytics' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        Alstom Consulting
      </button>
      <button
        type="button"
        on:click={() => activeFilter = 'Leadership'}
        class="px-3 py-1 rounded-full font-medium transition cursor-pointer {activeFilter === 'Leadership' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        Team Leadership
      </button>
    </div>
  </div>

  <!-- Timeline Container -->
  <div class="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-10 my-4">
    {#each filteredExperiences as exp (exp.id)}
      <div class="relative group break-inside-avoid">
        <!-- Timeline Marker Dot -->
        <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-slate-900 bg-white group-hover:bg-slate-900 transition shadow-xs"></div>

        <!-- Role Header Card -->
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 mb-2">
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-700 transition">
              {exp.role}
            </h3>
            <div class="flex flex-wrap items-center gap-2 text-sm mt-0.5">
              {#if exp.company}
                <span class="font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-xs border border-slate-200">
                  {exp.company}
                </span>
              {/if}
              <span class="text-slate-500 text-xs flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {exp.location}
              </span>
            </div>
          </div>

          <!-- Date Badge -->
          <div class="flex items-center gap-1.5 self-start shrink-0 mt-1 sm:mt-0">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80">
              {exp.period}
            </span>
            {#if exp.isOngoing}
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Active
              </span>
            {/if}
          </div>
        </div>

        <!-- Highlights Bullet List -->
        <ul class="mt-3 space-y-2 text-sm text-slate-700 leading-relaxed">
          {#each exp.highlights as highlight}
            {@const { prefix, rest } = formatBullet(highlight)}
            <li class="flex items-start gap-2.5">
              <span class="text-slate-400 select-none mt-1 shrink-0">•</span>
              <div>
                {#if prefix}
                  <strong class="font-semibold text-slate-900">{prefix}</strong>{rest}
                {:else}
                  <span>{rest}</span>
                {/if}
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
