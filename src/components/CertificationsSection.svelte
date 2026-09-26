<script lang="ts">
  import type { CertificationItem } from '../data/cv';

  export let certifications: CertificationItem[];
</script>

<section id="certifications" class="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm break-inside-avoid">
  <div class="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-5">
    <div class="w-2 h-5 bg-slate-900 rounded-full"></div>
    <h2 class="text-lg sm:text-xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
      Certifications
    </h2>
  </div>

  <div class="space-y-3">
    {#each certifications as cert}
      <div class="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition flex items-start gap-3">
        <div class="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
            {cert.title}
          </h3>
          <p class="text-xs font-medium text-slate-500 mt-0.5">
            {cert.issuer}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
