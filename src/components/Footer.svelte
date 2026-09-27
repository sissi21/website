<script lang="ts">
  import type { ContactInfo } from '../data/cv';

  export let contact: ContactInfo;
</script>

<footer class="mt-12 py-8 border-t border-slate-200 text-center text-xs text-slate-500 no-print">
  <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center space-x-2">
      <span class="font-serif-heading font-bold text-slate-800 text-sm">LUISA CERRATO</span>
      <span>•</span>
      <span>{contact.title}</span>
    </div>

    <div class="flex items-center space-x-4">
      <a href={contact.linkedInUrl} target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 transition">
        LinkedIn
      </a>
      <a href="mailto:{contact.email}" class="hover:text-slate-900 transition">
        Email
      </a>
      <button
        type="button"
        on:click={() => typeof window !== 'undefined' && window.print()}
        class="hover:text-slate-900 transition cursor-pointer"
      >
        Print / PDF
      </button>
    </div>

    <div>
      <span>© 2026 Luisa Cerrato. Built with Astro & Svelte.</span>
    </div>
  </div>
</footer>
