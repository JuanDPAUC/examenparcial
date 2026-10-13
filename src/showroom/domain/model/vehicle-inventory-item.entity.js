
export class VehicleInventoryItem {
    constructor({
                    id =null,
                    sectionId= null,
                    vehicleCategoryId= '',
                    vehicleId = null,
                    vehicleName = '',
                    quantity = null,
                    registeredAt =  ''

                }) {
        this.id = id;
        this.sectionId = sectionId;
        this.vehicleCategoryId = vehicleCategoryId;
        this.vehicleId = vehicleId;
        this.vehicleName = vehicleName;
        this.quantity = quantity;
        this.registeredAt = registeredAt;

    }
}