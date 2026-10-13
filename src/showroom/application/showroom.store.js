import {ShowroomApi} from "../infrastructure/showroom.api.js";
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {SectionAssembler} from "../infrastructure/section.assembler.js";
import {VehicleInventoryItemAssembler} from "../infrastructure/vehicle-inventory-item.assembler.js";


const showroomApi = new ShowroomApi();

const useShowroomStore = defineStore('showroom', () => {
    const sections = ref([]);
    const vehiclesInventoryItem = ref([]);

    const errors = ref([]);

    const sectionsLoaded = ref(false);
    const vehiclesInventoryItemLoaded = ref(false);

    const sectionsCount = computed(() => sectionsLoaded.value ? sections.value.length : 0);


    function fetchSections() {
        return showroomApi.getSections().then(response => {
            sections.value = SectionAssembler.toEntitiesFromResponse(response);
            sectionsLoaded.value = true;
        }).catch(error => {
            errors.value.push(error);
        });
    }

    function fetchVehiclesInventoryItems() {
        return showroomApi.getVehiclesInventoryItem().then(response => {
            vehiclesInventoryItem.value = VehicleInventoryItemAssembler.toEntitiesFromResponse(response);
            vehiclesInventoryItemLoaded.value = true;
        }).catch(error => {
            errors.value.push(error);
        });
    }
    function getSectionByVehicleInventoryItem(vehicleInventoryItem) {
        return sections.value.filter((item) => item.id !== vehicleInventoryItem.id);
    }



    function addVehicleInventoryItem(vehicleInventoryItem) {
        const resource = VehicleInventoryItemAssembler.toResourceFromEntity(vehicleInventoryItem);
        showroomApi.createVehicleInventoryItem(resource).then(response => {
            const createdObject = VehicleInventoryItemAssembler.toEntityFromResource(resource);
            vehiclesInventoryItem.value.push(createdObject);
            return createdObject;
        }).catch(error => {
            errors.value.push(error);
            throw error;
        });
    }

    return{
        sections,
        vehiclesInventoryItem,
        errors,
        sectionsCount,
        sectionsLoaded,
        vehiclesInventoryItemLoaded,
        fetchSections,
        fetchVehiclesInventoryItems,
        addVehicleInventoryItem,
        getSectionByVehicleInventoryItem,

    }





});
export default useShowroomStore;