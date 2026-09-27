<script lang="ts">
  import type { ContactInfo } from '../data/cv';

  export let contact: ContactInfo;

  let copied = false;

  function copyAll() {
    const text = `Luisa Cerrato - ${contact.title}\nEmail: ${contact.email}\nLocation: ${contact.location}\nLinkedIn: ${contact.linkedInUrl}\nPortfolio: ${contact.boldUrl}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      copied = true;
      setTimeout(() => copied = false, 3000);
    }
  }

  function downloadVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Cerrato;Luisa;;;
FN:Luisa Cerrato
TITLE:${contact.title}
EMAIL;TYPE=INTERNET,HOME:${contact.email}
ADR;TYPE=HOME:;;;Zürich;;;Switzerland
URL:${contact.boldUrl}
URL;TYPE=LinkedIn:${contact.linkedInUrl}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Luisa_Cerrato.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<section id="contact" class="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden break-inside-avoid">
  <!-- Subtle background glow -->
  <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

  <div class="relative z-10 w-full">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4 border border-slate-700">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      Available for Opportunities & Advisory
    </div>

    <h2 class="text-2xl sm:text-3xl font-serif-heading font-bold text-white tracking-wide">
      Let's Connect & Collaborate
    </h2>
    <p class="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
      Interested in discussing Project & Program Management, Ads Quality operations, or predictive data initiatives? Feel free to reach out directly.
    </p>

    <!-- Contact Grid: 4 Symmetrical Cards -->
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Email Box -->
      <a
        href="mailto:{contact.email}"
        class="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition group"
      >
        <div class="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 group-hover:text-white transition shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="overflow-hidden min-w-0">
          <div class="text-xs text-slate-400 font-medium">Email Address</div>
          <div class="text-sm font-semibold text-white truncate">{contact.email}</div>
        </div>
      </a>

      <!-- LinkedIn Box -->
      <a
        href={contact.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition group"
      >
        <div class="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M7.86 18.5v-8.37H5.06v8.37h2.8z"/>
          </svg>
        </div>
        <div class="overflow-hidden min-w-0">
          <div class="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
          <div class="text-sm font-semibold text-white truncate">{contact.linkedIn}</div>
        </div>
      </a>

      <!-- Portfolio Box -->
      <a
        href={contact.boldUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition group"
      >
        <div class="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
        <div class="overflow-hidden min-w-0">
          <div class="text-xs text-slate-400 font-medium">Portfolio Profile</div>
          <div class="text-sm font-semibold text-white truncate">{contact.boldProfile}</div>
        </div>
      </a>

      <!-- Location Box -->
      <div class="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
        <div class="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div class="overflow-hidden min-w-0">
          <div class="text-xs text-slate-400 font-medium">Location</div>
          <div class="text-sm font-semibold text-white truncate">{contact.location}</div>
        </div>
      </div>
    </div>

    <!-- Bottom Actions (Copy all, Download vCard) -->
    <div class="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3 no-print">
      <button
        on:click={copyAll}
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span>{copied ? '✓ Contact Info Copied!' : 'Copy Full Contact Info'}</span>
      </button>

      <button
        on:click={downloadVCard}
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Save Contact (.vcf)</span>
      </button>
    </div>
  </div>
</section>