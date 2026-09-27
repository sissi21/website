<script lang="ts">
  let isMobileOpen = false;

  function toggleMobile() {
    isMobileOpen = !isMobileOpen;
  }

  function closeMobile() {
    isMobileOpen = false;
  }

</script>

<nav class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 no-print transition-all shadow-2xs">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 gap-3">
      <!-- Logo & Brand -->
      <div class="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0">
        <a href="#top" class="group flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-full bg-slate-900 text-white font-serif flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs group-hover:bg-slate-700 transition shrink-0">
            LC
          </span>
          <span class="font-serif-heading font-bold text-base sm:text-lg tracking-wider text-slate-900 group-hover:text-slate-700 transition whitespace-nowrap">
            LUISA CERRATO
          </span>
        </a>
        <span class="hidden xl:inline-block px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full border border-slate-200 shrink-0">
          Project Manager
        </span>
      </div>

      <!-- Desktop Links (Visible on lg: >=1024px to prevent tablet overflow) -->
      <div class="hidden lg:flex items-center space-x-5 xl:space-x-6 text-sm font-medium text-slate-600">
        <a href="#about" class="hover:text-slate-900 transition py-1">About</a>
        <a href="#experience" class="hover:text-slate-900 transition py-1">Experience</a>
        <a href="#skills" class="hover:text-slate-900 transition py-1">Skills</a>
        <a href="#education" class="hover:text-slate-900 transition py-1">Education</a>
        <a href="#certifications" class="hover:text-slate-900 transition py-1">Certifications</a>
        <a href="#contact" class="hover:text-slate-900 transition py-1">Contact</a>
      </div>

      <!-- Actions / CTAs -->
      <div class="flex items-center gap-2 sm:gap-2.5 shrink-0">

        <a
          href="mailto:cerrato.lu@gmail.com"
          class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition cursor-pointer shadow-xs whitespace-nowrap"
        >
          <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Get in Touch</span>
        </a>

        <!-- Mobile / Tablet Hamburger Button (Visible below lg: <1024px) -->
        <div class="flex lg:hidden">
          <button
            on:click={toggleMobile}
            type="button"
            class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  </div>

  <!-- Mobile / Tablet Dropdown Menu -->
  {#if isMobileOpen}
    <div class="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-5 space-y-1 shadow-md">
      <a href="#about" on:click={closeMobile} class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">About Profile</a>
      <a href="#experience" on:click={closeMobile} class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">Work Experience</a>
      <a href="#skills" on:click={closeMobile} class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">Skills & Expertise</a>
      <a href="#education" on:click={closeMobile} class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">Education & Honors</a>
      <a href="#certifications" on:click={closeMobile} class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">Certifications</a>
      <a href="#contact" on:click={closeMobile} class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition">Contact</a>
      <div class="pt-3 mt-2 border-t border-slate-100 flex flex-col sm:hidden gap-2">
        <a
          href="mailto:cerrato.lu@gmail.com"
          on:click={closeMobile}
          class="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  {/if}
</nav>
