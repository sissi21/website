<script lang="ts">
  export let skills: {
    coreCompetencies: string[];
    technicalTools: string[];
    professionalStrengths: string[];
  };

  let activeTab: 'all' | 'core' | 'tools' | 'strengths' = 'all';
</script>

<section id="skills" class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition hover:shadow-md/50 break-inside-avoid">
  <div class="border-b border-slate-100 pb-4 mb-5">
    <div class="flex items-center gap-3">
      <div class="w-2.5 h-6 bg-slate-900 rounded-full shrink-0"></div>
      <h2 class="text-xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
        Skills & Expertise
      </h2>
    </div>

    <!-- Filter chips (Clean wrap, no overflow) -->
    <div class="flex flex-wrap items-center gap-1.5 mt-3.5 text-xs no-print">
      <button
        type="button"
        on:click={() => activeTab = 'all'}
        class="px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer {activeTab === 'all' ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        All
      </button>
      <button
        type="button"
        on:click={() => activeTab = 'core'}
        class="px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer {activeTab === 'core' ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        Core ({skills.coreCompetencies.length})
      </button>
      <button
        type="button"
        on:click={() => activeTab = 'tools'}
        class="px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer {activeTab === 'tools' ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        Tools ({skills.technicalTools.length})
      </button>
      <button
        type="button"
        on:click={() => activeTab = 'strengths'}
        class="px-2.5 py-1 rounded-full text-xs font-semibold transition cursor-pointer {activeTab === 'strengths' ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
      >
        Strengths ({skills.professionalStrengths.length})
      </button>
    </div>
  </div>

  <div class="space-y-5">
    <!-- Core Competencies -->
    {#if activeTab === 'all' || activeTab === 'core'}
      <div>
        <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-slate-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Core Competencies
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          {#each skills.coreCompetencies as skill}
            <span class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100/90 text-slate-800 border border-slate-200/80 hover:bg-slate-200 transition">
              {skill}
            </span>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Technical Tools -->
    {#if activeTab === 'all' || activeTab === 'tools'}
      <div>
        <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-slate-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Technical Tools
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          {#each skills.technicalTools as tool}
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900 text-white shadow-2xs hover:bg-slate-800 transition">
              {tool}
            </span>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Professional Strengths -->
    {#if activeTab === 'all' || activeTab === 'strengths'}
      <div>
        <h3 class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-slate-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Professional Strengths
        </h3>
        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          {#each skills.professionalStrengths as strength}
            <span class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200/90 hover:bg-slate-100 transition">
              {strength}
            </span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>
