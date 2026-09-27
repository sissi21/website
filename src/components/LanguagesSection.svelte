<script lang="ts">
  import type { LanguageItem } from '../data/cv';

  export let languages: LanguageItem[];
</script>

<section id="languages" class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm transition hover:shadow-md/50 break-inside-avoid">
  <div class="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5">
    <div class="w-2.5 h-6 bg-slate-900 rounded-full shrink-0"></div>
    <h2 class="text-xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
      Languages
    </h2>
  </div>

  <div class="space-y-3">
    {#each languages as lang}
      <div class="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition">
        <div>
          <div class="text-sm font-bold text-slate-900">{lang.language}</div>
          <div class="text-xs text-slate-500 mt-0.5">{lang.proficiency}</div>
        </div>

        <!-- 5-Dot Proficiency Indicator -->
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
