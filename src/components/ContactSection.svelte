<script lang="ts">
  import type { ContactInfo } from '../data/cv';

  export let contact: ContactInfo;

  let copied = false;

  function copyAll() {
    const text = `Luisa Cerrato - ${contact.title}\nEmail: ${contact.email}\nLocation: ${contact.location}\nLinkedIn: ${contact.linkedInUrl}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      copied = true;
      setTimeout(() => copied = false, 3000);
    }
  }

  function downloadVCard() {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Cerrato;Luisa;;;\nFN:Luisa Cerrato\nTITLE:${contact.title}\nEMAIL;TYPE=INTERNET,HOME:${contact.email}\nADR;TYPE=HOME:;;;Zürich;;;Switzerland\nURL;TYPE=LinkedIn:${contact.linkedInUrl}\nEND:VCARD`;

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

<section id="contact" class="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-9 shadow-lg relative overflow-hidden break-inside-avoid">
  <!-- Subtle decorative ambient glow wrapped inside inset container -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl no-print">
    <div class="absolute -bottom-10 -right-10 w-56 h-56 bg-slate-800 rounded-full blur-2xl opacity-40"></div>
  </div>

  <div class="relative z-10 w-full">
    <!-- Active status pill -->
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 text-xs font-semibold mb-3.5 border border-slate-700/80 shadow-2xs">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span>Available for Opportunities</span>
    </div>

    <h2 class="text-2xl sm:text-3xl font-serif-heading font-bold text-white tracking-wide">
      Let's Connect
    </h2>
    <p class="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
      Interested in discussing Project & Program Management, cross-functional delivery, operations, or data-driven initiatives? Feel free to reach out directly.
    </p>

    <!-- Contact Grid (1 col on mobile, 2 col on tablet, 3 col on desktop) -->
    <div class="mt-6 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-4">
      <!-- Email Box -->
      <a
        href="mailto:{contact.email}"
        class="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition group min-w-0"
        title={contact.email}
      >
        <div class="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 group-hover:text-white transition shrink-0 shadow-2xs">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="overflow-hidden min-w-0 flex-1">
          <div class="text-xs text-slate-400 font-medium">Email Address</div>
          <div class="text-sm font-semibold text-white truncate mt-0.5">{contact.email}</div>
        </div>
      </a>

      <!-- LinkedIn Box -->
      <a
        href={contact.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition group min-w-0"
        title={contact.linkedIn}
      >
        <div class="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M7.86 18.5v-8.37H5.06v8.37h2.8z"/>
          </svg>
        </div>
        <div class="overflow-hidden min-w-0 flex-1">
          <div class="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
          <div class="text-sm font-semibold text-white truncate mt-0.5">{contact.linkedIn}</div>
        </div>
      </a>

    
  </div>
</section>
