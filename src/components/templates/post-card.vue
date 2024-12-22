<template>
    

<div class="animate-fade-in block max-w-sm p-10 bg-white border border-pink-500 rounded-lg shadow hover:bg-gray-100 dark:bg-pink-500 dark:border-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">{{ text }}</p>
</div>


</template>

<script>
export default {
    props: {
        title: String,
        text: String
    }
}
</script>

<style>
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.5s ease-in-out;
    }
  </style>