<script setup>
import { mdiYoutube  } from "@mdi/js";
import BaseButton from "@/components/BaseButton.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import { gradientBgGhiper } from "@/colors";
</script>

<template>
  <SectionBanner :class="gradientBgGhiper">
    <h1 class="text-3xl text-white mb-6">
      Seja Bem vindo ao <strong>GHiper Sistemas</strong>
      <p>conheça nossos vídeos ensinando a usar a plataforma</p>
    </h1>
    <div>
      <BaseButton
        href="#"
        :icon="mdiYoutube"
        label="Aulas Youtube"
        target="_blank"
        rounded-full
      />
    </div>
  </SectionBanner>
</template>
