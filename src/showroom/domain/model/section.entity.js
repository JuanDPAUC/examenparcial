
export class Section {
    constructor({id = null,
                    name = '',
                    vehicleCategory ='',
                    maxCapacity =null
                }) {
        this.id = id;
        this.name = name;
        this.vehicleCategory = vehicleCategory;
        this.maxCapacity = maxCapacity;


    }
}