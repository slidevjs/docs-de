<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a :href="$site.base" aria-label="go to home">Take me home.</a>
  </div>
</template>

<script setup lang="ts">
const msgs = [
  'Hier ist nichts.',
  'Wie sind wir denn hier hin gekommen?',
  // 'That\'s a Four-Oh-Four.',
  'Sieht aus, als wären ein paar Links kaputt.',
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>
