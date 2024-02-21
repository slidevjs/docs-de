<script setup lang="ts">
defineProps<{ type: 'node' | 'client' }>()
</script>

<template>
<<<<<<< HEAD
  <details class="px-4 py-3 mt-4 rounded bg-gray-400 bg-opacity-10">
    <summary class="outline-none">
      Umgebung:
      <span class="capitalize" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
=======
  <details class="p4 mt-4 rounded-lg bg-gray-400 bg-opacity-10">
    <summary class="outline-none !m0 select-none">
      Environment:
      <span class="capitalize font-bold" :class="type === 'node' ? 'text-orange-400' : 'text-green-400'">{{ type }}</span>
>>>>>>> c3c1774bdf48295664f5b30d7ba7bfbda5a0f3d2
    </summary>

    <div class="pt2 opacity-75">
      <span v-if="type === 'node'">
        Diese Konfigurationsfunktion läuft nur in einer Node.js Umgebung, man hat zugriff auf Node's API.
      </span>
      <span v-else>
        Diese Konfigurationsfunktion läuft nur auf dem Client. Stelle sicher, dass Browserkompatibilität gegeben ist, wenn Packages importiert werden.
      </span>
    </div>
  </details>
</template>
