import {VehicleInventoryItem} from "../domain/model/vehicle-inventory-item.entity.js";


export class VehicleInventoryItemAssembler {

    static toEntityFromResource(resource) {
        return new VehicleInventoryItem(
            {
                id: resource.id ?? null,
                sectionId: resource.sectionId ?? null,
                vehicleCategoryId: resource.vehicleCategoryId ?? '',
                vehicleId: resource.vehicleId ?? null,
                vehicleName: resource.vehicleName ?? '',
                quantity: resource.quantity ?? 0,
                registeredAt: resource.registeredAt ?? null,

            }
        )
    }
    static toResourceFromEntity(entity) {
        return  {
            sectionId: entity.sectionId,
            vehicleCategoryId: entity.vehicleCategoryId,
            vehicleId: entity.vehicleId,
            vehicleName: entity.vehicleName,
            quantity: entity.quantity,
            registeredAt: entity.registeredAt,
        }
    }

    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['vehicles-inventory-items'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}