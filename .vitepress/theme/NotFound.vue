<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
<<<<<<< HEAD
    <a :href="$site.base" aria-label="go to home">Zurück zum Start</a>
=======
    <a :href="site.base" aria-label="go to home">Take me home.</a>
>>>>>>> 8c6068ac1dd3da821a6d4ef1d039063dcb34bc25
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const {site} = useData()
const msgs = [
  "Hier ist nichts.",
  "Wie sind wir denn hier hin gekommen?",
  // 'That\'s a Four-Oh-Four.',
  "Sieht aus, als wären ein paar Links kaputt.",
];

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)];
}
</script>
