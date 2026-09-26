<script lang="ts">
  let isMobileOpen = false;

  function toggleMobile() {
    isMobileOpen = !isMobileOpen;
  }

  function handlePrint() {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }
</script>

<nav class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 no-print transition-all">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center space-x-3">
        <a href="#top" class="group flex items-center space-x-2.5">
          <span class="w-8 h-8 rounded-full bg-slate-900 text-white font-serif flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-slate-700 transition">
            LC
          </span>
          <span class="font-serif-heading font-bold text-lg tracking-wider text-slate-900 group-hover:text-slate-700 transition">
            LUISA CERRATO
          </span>
        </a>
        <span class="hidden md:inline-block px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200">
          Project Manager
        </span>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
        <a href="#about" class="hover:text-slate-900 transition">About</a>
        <a href="#experience" class="hover:text-slate-900 transition">Experience</a>
        <a href="#skills" class="hover:text-slate-900 transition">Skills</a>
        <a href="#education" class="hover:text-slate-900 transition">Education</a>
        <a href="#certifications" class="hover:text-slate-900 transition">Certifications</a>
        <a href="#contact" class="hover:text-slate-900 transition">Contact</a>
      </div>

      <!-- Desktop CTAs -->
      <div class="hidden sm:flex items-center space-x-3">
        <button
          on:click={handlePrint}
          type="button"
          class="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition shadow-xs cursor-pointer"
          title="Print or Save CV as PDF"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <span>Print / PDF</span>
        </button>

        <a
          href="mailto:cerrato.lu@gmail.com"
          class="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition shadow-xs cursor-pointer"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Get in Touch</span>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <div class="flex md:hidden">
        <button
          on:click={toggleMobile}
          type="button"
          class="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if isMobileOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Dropdown -->
  {#if isMobileOpen}
    <div class="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2">
      <a href="#about" on:click={() => isMobileOpen = false} class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100">About</a>
      <a href="#experience" on:click={() => isMobileOpen = false} class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100">Experience</a>
      <a href="#skills" on:click={() => isMobileOpen = false} class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100">Skills</a>
      <a href="#education" on:click={() => isMobileOpen = false} class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100">Education</a>
      <a href="#certifications" on:click={() => isMobileOpen = false} class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100">Certifications</a>
      <a href="#contact" on:click={() => isMobileOpen = false} class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100">Contact</a>
      <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
        <button
          on:click={handlePrint}
          class="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <span>Print / Save CV</span>
        </button>
        <a
          href="mailto:cerrato.lu@gmail.com"
          class="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium bg-slate-900 text-white hover:bg-slate-800"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  {/if}
</nav>
