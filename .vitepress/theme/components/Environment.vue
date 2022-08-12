<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Umgebung:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
    </summary>

    <div class="mt-2 opacity-75">
      <span v-if="type === 'node'">
        Diese Konfigurationsfunktion läuft nur in einer Node.js Umgebung, man hat zugriff auf Node's API.
      </span>
      <span v-else>
        Diese Konfigurationsfunktion läuft nur auf dem Client. Stelle sicher, dass Browserkompatibilität gegeben ist, wenn Packages importiert werden.
      </span>
    </div>
  </details>
</template>
