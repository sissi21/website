<script lang="ts">
  import type { LanguageItem } from '../data/cv';

  export let languages: LanguageItem[];
</script>

<section id="languages" class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm break-inside-avoid">
  <div class="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-5">
    <div class="w-2 h-5 bg-slate-900 rounded-full"></div>
    <h2 class="text-lg sm:text-xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
      Languages
    </h2>
  </div>

  <div class="space-y-3.5">
    {#each languages as lang}
      <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
        <div>
          <div class="text-sm font-bold text-slate-900">{lang.language}</div>
          <div class="text-xs text-slate-500">{lang.proficiency}</div>
        </div>

        <!-- 5-Dot Indicator as in reference template -->
        <div class="flex items-center gap-1.5" title="{lang.language}: {lang.level}/5">
          {#each Array(5) as _, i}
            <span
              class="w-2.5 h-2.5 rounded-full transition-all {i < lang.level ? 'bg-slate-900 scale-105' : 'bg-slate-200'}"
            ></span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
