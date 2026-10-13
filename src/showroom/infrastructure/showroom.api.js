import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const sectionsEndpointPath              = import.meta.env.VITE_SHOWROOM_SECTIONS_ENDPOINT_PATH;
const vehiclesInventoryItemEndpointPath = import.meta.env.VITE_VEHICLE_INVENTORY_ITEMS_ENDPOINT_PATH;
export class ShowroomApi extends BaseApi {

    #sectionsEndpoint;
    #vehiclesInventoryItemEndpoint;

    constructor() {
        super();
        this.#sectionsEndpoint = new BaseEndpoint(this, sectionsEndpointPath);
        this.#vehiclesInventoryItemEndpoint = new BaseEndpoint(this, vehiclesInventoryItemEndpointPath);
    }

    getSections() {
        return this.#sectionsEndpoint.getAll();
    }
    getVehiclesInventoryItem() {
        return this.#vehiclesInventoryItemEndpoint.getAll();
    }
    createVehicleInventoryItem(resource) {
        return this.#vehiclesInventoryItemEndpoint.create(resource);
    }




}