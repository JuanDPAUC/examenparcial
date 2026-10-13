<script setup>


import useShowroomStore from "../../application/showroom.store.js";
import {computed} from "vue";

const props = defineProps({

  section: {type: Object, required: true}

});
const showroomStore = useShowroomStore();
const vehiclesInventory = computed(() => showroomStore.getSectionByVehicleInventoryItem(props.section));
const hasVehicleInventory = computed(() => vehiclesInventory.value > 0 );

</script>

<template>
  <pv-card>
    <template #header>
      <h3 class="m-3 text-xl">{{ section.name }}</h3>
    </template>
    <template #content>
      <div v-if="hasVehicleInventory" class="flex flex-column gap-2">
        <div v-for="vehicleInventory in vehiclesInventory" :key="vehiclesInventory.id"
             class="flex justify-content-between">
          <span>{{ vehicleInventory.vehicleName }}</span>
          <span>{{ vehicleInventory.quantity }}</span>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>