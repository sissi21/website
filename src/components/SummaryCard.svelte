<script lang="ts">
  export let summary: string[];

  const highlights = [
    { label: "Team Leadership", value: "12-Person Team", desc: "Coordinated 500+ weekly deliverables" },
    { label: "Cost Optimization", value: "€5.5M Savings", desc: "Predictive maintenance consulting with Alstom" },
    { label: "Academic Excellence", value: "Best Student Award", desc: "Highest GPA in Master's cohort at EDHEC" },
    { label: "Quality Recognition", value: "Best Rater", desc: "96% quality benchmark for Google Ads" },
  ];
</script>

<section id="about" class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
  <div class="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
    <div class="w-2.5 h-6 bg-slate-900 rounded-full"></div>
    <h2 class="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900 tracking-wide uppercase">
      Executive Profile
    </h2>
  </div>

  <div class="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
    <p>
      Project Manager with a proven track record supporting <strong class="text-slate-900 font-semibold">Google</strong> — via Vaco in Palo Alto, CA — on Search Ads Quality and expertise in Google Ads policies. Repeatedly recognized as <strong class="text-slate-900 font-semibold">Best Rater</strong> and promoted to <strong class="text-slate-900 font-semibold">Team Captain</strong>, leading a 12-person team to drive quality, efficiency, and process improvements. Upon relocating to Switzerland, earned a Master’s in Data Management & Business Analytics from <strong class="text-slate-900 font-semibold">EDHEC</strong> (recognized as the highest-GPA student in the cohort) and completed a high-impact consulting project with <strong class="text-slate-900 font-semibold">Alstom</strong> deploying predictive algorithms.
    </p>
    <p>
      I have since continued building my project and program management experience through volunteer projects and the <strong class="text-slate-900 font-semibold">Google Project Management Professional Certificate</strong>, and I look forward to helping Google once again in delivering its mission.
    </p>
  </div>

  <!-- Key Highlight Metric Pills -->
  <div class="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-3">
    {#each highlights as item}
      <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition group">
        <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{item.label}</div>
        <div class="text-base sm:text-lg font-bold text-slate-900 mt-0.5 group-hover:text-slate-700 transition">{item.value}</div>
        <div class="text-[11px] text-slate-500 mt-1 line-clamp-1">{item.desc}</div>
      </div>
    {/each}
  </div>
</section>
