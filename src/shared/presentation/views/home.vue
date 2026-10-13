<script setup>
import { useI18n } from "vue-i18n";
import useShowroomStore from "../../../showroom/application/showroom.store.js";
import {onMounted} from "vue";
import ShowroomSectionSummanry from "../../../showroom/presentation/components/showroom-section-summanry.vue";

const { t } = useI18n();
const showroomStore = useShowroomStore();

onMounted(() => {
  if (!showroomStore.vehiclesInventoryItemLoaded || !showroomStore.sectionsLoaded) {
    showroomStore.fetchData();
  }
});


</script>

<template>
  <section class="p-3">
    <div class="flex flex-column gap-2 mb-3">
      <h1 class="m-0">{{ t('home.title') }}</h1>
      <p class="m-0 text-color-secondary">{{ t('home.content') }}</p>
    </div>
    <h2 class="mt-4">{{ t('home.collections') }}</h2>
    <h3 class="mt-2 mb-3">{{ t('home.historical-collections') }}</h3>
    <div class="grid">
      <div v-for="section in showroomStore.sections" :key="section.id" class="col-12 md:col-6">
        <showroom-section-summanry :section="section" />
      </div>
    </div>
  </section>
</template>
