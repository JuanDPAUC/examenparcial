import {Section} from "../domain/model/section.entity.js";


export class SectionAssembler {
    static toEntityFromResource(resource) {
        return new Section({...resource});
    }
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        const resources = response.data instanceof Array ? response.data : response.data['section'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}