<script lang="ts">
  import type { ContactInfo } from '../data/cv';

  export let contact: ContactInfo;
</script>

<footer class="mt-8 sm:mt-12 py-6 sm:py-8 border-t border-slate-200/80 text-center text-xs text-slate-500 no-print">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2">
      <span class="font-serif-heading font-bold text-slate-800 text-sm">LUISA CERRATO</span>
      <span>•</span>
      <span class="text-slate-600">{contact.title}</span>
    </div>

    <div class="flex items-center gap-4 text-xs font-medium">
      <a href={contact.linkedInUrl} target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 transition">
        LinkedIn
      </a>
      <a href="mailto:{contact.email}" class="hover:text-slate-900 transition">
        Email
      </a>
    </div>

    <div>
      <span class="text-slate-400">© 2026 Luisa Cerrato • Executive CV</span>
    </div>
  </div>
</footer>
