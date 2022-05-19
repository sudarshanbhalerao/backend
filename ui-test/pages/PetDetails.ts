import { FedexBasePage, timeout } from "qcoe-fedex-ui-test-wdio";
import data from '../data/testdata';

const selectors = {
    findOwnerLink: "a[href='/owners/find']",
    addOwnerButton: 'a.btn.btn-default',
    firstNameInput: 'input#firstname',
    lastNameInput: 'input#lastname',
    addressInput: 'input#address',
    cityInput: 'input#city',
    telephoneInput: 'input#telephone',
    addOwnerButton2: 'button.btn.btn-default',
    addPetButton: '/html/body/div/div/a[2]',
    petName: 'input#name.form-control',
    birthDate: 'input#birthDate.form-control',
    petType: 'select#type',
    petTypeOptions: '//*[@id="type"]/option',
    addPetButton2: 'button.btn.btn-default',    
    addedPetName: '/html/body/div/div/table[2]/tbody/tr/td[1]/dl/dd[1]',
    addedPetDob: '/html/body/div/div/table[2]/tbody/tr/td[1]/dl/dd[2]',
    addedPetType: '/html/body/div/div/table[2]/tbody/tr/td[1]/dl/dd[3]'
}

enum PetTypes {

}
class PetDetails extends FedexBasePage {

    constructor() {
        super (selectors, '');
    }

    /**
     * This method is for navigating to find owner page
     */
    public async navigateToFindOwnerPage() {
        await this.waitForElementClickable('findOwnerLink', timeout.MEDIUM);
        await this.click('findOwnerLink');
    }

    /**
     * This method is for navigating to add new owner page
     */
    public async navigateToAddOwnerPage() {
        await this.waitForElementClickable('addOwnerButton', timeout.MEDIUM);
        await this.click('addOwnerButton');
    }

    /**
     * This method is for adding new owner
     */
    public async addingNewOwner() {
        await this.sendKeys('firstNameInput',data.TestData.OwnerDetails.firstName);
        await this.sendKeys('lastNameInput',data.TestData.OwnerDetails.lastName);
        await this.sendKeys('addressInput',data.TestData.OwnerDetails.address);
        await this.sendKeys('cityInput',data.TestData.OwnerDetails.city);
        await this.sendKeys('telephoneInput',data.TestData.OwnerDetails.telephone);
        await this.waitForElementClickable('addOwnerButton2', timeout.MEDIUM);
        await this.click('addOwnerButton2');
    }

    /**
     * This method is for navigating to add pet page
     */
    public async navigateToAddPetPage() {
        await this.waitForElementClickable('addPetButton', timeout.MEDIUM);
        await this.click('addPetButton');
    }

    /**
     * This method is for clicking pet type
     */
    public async clickPetType() {
        await this.click('petType');
    }

    /**
     * This method is for navigating to adding new pet
     */
    public async addingNewPet() {
        await this.sendKeys('petName',data.TestData.PetDetails.petName);
        await this.sendKeys('birthDate',data.TestData.PetDetails.dob);
        const type = await (await $(selectors.petTypeOptions+"[1]")).getText();
        data.TestData.PetDetails.type = type;
        await this.click('addPetButton2');
    }

    /**
     * This method is for verifying all pet types displayed under type field
     */
    public async verifyPetDetails() {
        let petTypeOptions = $$(selectors.petTypeOptions);
        for(let i=1; i<=(await petTypeOptions).length; i++) {
            let type = await (await $(selectors.petTypeOptions+"["+i+"]")).getText();
            data.TestData.ActualPetTypes.push(type);
        }
    }

    /**
     * This method will verify new pet name added
     */
    public async verifyPetNameAdded(): Promise<any> {
        await this.waitForElementVisible('addedPetName', timeout.MEDIUM);
        const petName = await (await $(selectors.addedPetName)).getText();
        return petName;
    }

    /**
     * This method will verify new pet date of birth added
     */
    public async verifyPetDOBAdded(): Promise<any> {
        await this.waitForElementVisible('addedPetDob', timeout.MEDIUM);
        const dob = await (await $(selectors.addedPetDob)).getText();
        return dob;
    }

    /**
     * This method will verify new pet type added
     */
    public async verifyPetTypeAdded(): Promise<any> {
        await this.waitForElementVisible('addedPetType', timeout.MEDIUM);
        const type = await (await $(selectors.addedPetType)).getText();
        return type;
    }
}
export const petDetails = new PetDetails();