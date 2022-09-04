import { faker } from "@faker-js/faker";

export class Company {
    CompanyName: string;
    CatchPhrase: string;
    location: {
        lat:number;
        lng: number;
    }

    constructor(){
        this.CompanyName =faker.company.companyName();
        this.CatchPhrase = faker.company.catchPhrase();
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }

    markerContent(){
        return `<p>Company Name : ${this.CompanyName}</p>
        <p> Catchphrase: ${this.CatchPhrase}</p>
        `
    }
}