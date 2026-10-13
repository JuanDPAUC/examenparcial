import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Tooltip from 'primevue/tooltip';
import {
    Button,
    Card,
    ConfirmationService,
    ConfirmDialog,
    DialogService,
    Drawer,
    Image,
    InputNumber,
    InputText,
    Message,
    Select,
    SelectButton,
    Textarea,
    Toast,
    ToastService,
    Toolbar
} from "primevue";
import router from "./router.js";
import pinia from "./pinia.js";

const primeUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

// noinspection JSCheckFunctionSignatures
createApp(App)
    .use(i18n)
    .use(PrimeVue, { theme: { preset: Material }, ripple: true, license: primeUiLicenseKey })
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-drawer', Drawer)
    .component('pv-image', Image)
    .component('pv-input-number', InputNumber)
    .component('pv-input-text', InputText)
    .component('pv-message', Message)
    .component('pv-select', Select)
    .component('pv-select-button', SelectButton)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .directive('tooltip', Tooltip)
    .use(router)
    .use(pinia)
    .mount('#app')
