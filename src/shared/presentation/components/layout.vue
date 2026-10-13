<script setup>

import LanguageSwitcher from "./language-switcher.vue";
import {computed, ref} from "vue";
import {useI18n} from "vue-i18n";
import FooterContent from "./footer-content.vue";
import router from "../../../router.js";
import {useRouter} from "vue-router";
// To import when IAM is implemented:
// import AuthenticationSection from "../../../iam/presentation/components/authentication-section.vue";
const { t } = useI18n();
const router = useRouter();


const drawer = ref(false);
const drawerVisible = ref(false);


const logoUrl = computed(() => {
  const base = import.meta.env.VITE_LOGO_API_URL;
  const domain = import.meta.env.VITE_LOGO_DOMAIN;
  const token = import.meta.env.VITE_LOGO_API_TOKEN;
  if (!base || !domain) return '';
  return token ? `${base}/${domain}?token=${token}` : `${base}/${domain}`;
});

const toggleDrawer = () => {
  /**
   * Toggles the state of the drawer between open and closed.
   */
  drawer.value = !drawer.value;
}
const items = [
  {label: 'option.home', to: '/home'},
  {label: 'option.new-vehicle-inventory', to: '/vehicle/items/new'},
];

const navigateTo = (target) => {
  router.push(target);
  drawerVisible.value = false;
};
</script>

<template>
  <pv-toast/>
  <pv-confirm-dialog/>
  <header class="absolute top-0 left-0 w-full">
    <pv-toolbar class="bg-primary">
      <template #start>
        <pv-button class="p-button-text" icon="pi pi-bars" :aria-label="t('option.menu')" @click="toggleDrawer"/>
        <pv-image v-if="logoUrl" :src="logoUrl" :alt="'ANA Logo'" height="40" class="mx-3"/>

        <h3>ACME Learning Center</h3>
      </template>
      <template #end>
        <div class="flex-column mr-3">
          <pv-button v-for="item in items" :key="item.label" as-child v-slot="slotProps">
            <router-link :to="item.to" :class="slotProps['class']">{{ t(item.label) }}</router-link>
          </pv-button>
        </div>
        <language-switcher/>
      </template>
    </pv-toolbar>
    <pv-drawer v-model:visible="drawerVisible">
      <div class="flex flex-column h-full">
        <pv-image v-if="logoUrl" :src="logoUrl" :alt="'ANA Logo'" height="48" class="mb-3"/>
        <h3 class="mt-0">Astara Showroom Management</h3>
        <pv-button
            v-for="item in items"
            :key="item.label"
            :label="t(item.label)"
            :icon="item.icon"
            class="w-full mb-2"
            text
            @click="navigateTo(item.to)"/>
        <div class="mt-auto pt-3">
          <language-switcher/>
        </div>
      </div>
    </pv-drawer>

    <pv-drawer v-model:visible="drawer"/>
  </header>
  <main class="mt-7">
    <router-view/>
  </main>
  <footer-content/>
</template>