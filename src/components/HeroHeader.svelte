<script lang="ts">
  import type { ContactInfo } from '../data/cv';

  export let contact: ContactInfo;

  let copiedField: string | null = null;
  let copyTimeout: any;

  function copyText(text: string, label: string) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      copiedField = label;
      clearTimeout(copyTimeout);
      copyTimeout = setTimeout(() => {
        copiedField = null;
      }, 2500);
    }
  }

  function handleImageError(e: Event) {
    const target = e.currentTarget;
    if (target instanceof HTMLImageElement) {
      target.src = 'https://enhancv.s3.amazonaws.com/avatars/61a0c2c9f8bcb05e8823b0a2ca1b36b77694c540e435ce4e796ad84a7d3ce7e0.jpg';
    }
  }
</script>

<header class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
  <!-- Subtle decorative corner accent wrapped inside inset container -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl no-print">
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-slate-100/70 rounded-full blur-xl"></div>
  </div>

  <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-7 relative z-10">
    <!-- Round Portrait Photo with Availability Pip -->
    <div class="relative shrink-0">
      <div class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full p-1 bg-white ring-2 ring-slate-200/90 shadow-sm overflow-hidden">
        <img
          src={contact.avatarUrl}
          alt={contact.name}
          class="w-full h-full object-cover rounded-full"
          loading="eager"
          on:error={handleImageError}
        />
      </div>
      <div
        class="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white shadow-xs"
        title="Available for Opportunities"
      ></div>
    </div>

    <!-- Text Information -->
    <div class="flex-1 text-center md:text-left min-w-0 w-full">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="min-w-0">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-heading font-bold tracking-tight text-slate-900 uppercase">
            {contact.name}
          </h1>
          <p class="text-base sm:text-lg md:text-xl font-medium text-slate-600 mt-1 tracking-wide">
            {contact.title}
          </p>
        </div>
      </div>

      <!-- Quick Contact Pills & Badges -->
      <div class="mt-4 sm:mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-600 max-w-full">
        <!-- Location -->
        <div class="inline-flex items-center gap-1.5 h-8 sm:h-9 px-3 sm:px-3.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 shadow-2xs shrink-0">
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="font-medium text-xs sm:text-sm">{contact.location}</span>
        </div>

        <!-- Email with Copy Action (Responsive & Truncate Safe) -->
        <div class="inline-flex items-center max-w-full min-w-0 h-8 sm:h-9 pl-3 sm:pl-3.5 pr-1.5 rounded-full bg-slate-50 hover:bg-slate-100/90 border border-slate-200/80 text-slate-700 shadow-2xs transition group">
          <a
            href="mailto:{contact.email}"
            class="inline-flex items-center gap-1.5 hover:text-slate-900 transition mr-1.5 sm:mr-2 min-w-0 truncate"
            title={contact.email}
          >
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 group-hover:text-slate-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="font-medium text-xs sm:text-sm truncate">{contact.email}</span>
          </a>

          <button
            type="button"
            on:click={() => copyText(contact.email, 'email')}
            class="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 hover:text-slate-900 transition cursor-pointer shrink-0"
            title="Copy email to clipboard"
          >
            {#if copiedField === 'email'}
              <span class="font-semibold text-emerald-700">✓ Copied</span>
            {:else}
              <svg class="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            {/if}
          </button>
        </div>

        <!-- LinkedIn Profile -->
        <a
          href={contact.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 h-8 sm:h-9 px-3 sm:px-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 hover:text-slate-900 shadow-2xs transition group shrink-0"
        >
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88M7.86 18.5v-8.37H5.06v8.37h2.8z"/>
          </svg>
          <span class="font-medium text-xs sm:text-sm">{contact.linkedIn}</span>
        </a>
      </div>
    </div>
  </div>
</header>
