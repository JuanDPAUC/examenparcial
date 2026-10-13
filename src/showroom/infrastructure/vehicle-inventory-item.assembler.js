import {VehicleInventoryItem} from "../domain/model/vehicle-inventory-item.entity.js";


export class VehicleInventoryItemAssembler {

    toEntityFromResource(resource) {
        return new VehicleInventoryItem(
            {...resource}
        )
    }

    toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['vehicles-inventory-items'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}