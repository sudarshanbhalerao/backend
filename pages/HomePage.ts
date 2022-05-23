import { FedexBasePage, timeout } from "qcoe-fedex-ui-test-wdio"
const selectors = {
    findOwner: '//*[@id="main-navbar"]/ul/li[3]/a',
    addOwner: '/html/body/div/div/a',
    firstName: '//*[@id="firstName"]',
    lastName: '//*[@id="lastName"]',
    addressField: '//*[@id="address"]',
    cityField: '//*[@id="city"]',
    telephoneField: '//*[@id="telephone"]',
    nextAddOwner: '//*[@id="add-owner-form"]/div[2]/div/button',
    FirstnameFieldErrorMsg: '//*[@id="add-owner-form"]/div[1]/div[1]/div/span[2]',
    LastnameFieldErrorMsg: '//*[@id="add-owner-form"]/div[1]/div[2]/div/span[2]',
    addressFieldErrorMsg: '//*[@id="add-owner-form"]/div[1]/div[3]/div/span[2]',
    cityFieldErrorMsg: '//*[@id="add-owner-form"]/div[1]/div[4]/div/span[2]',
    telephoneFieldErrorMsg: '//*[@id="add-owner-form"]/div[1]/div[5]/div/span[2]',
    checkOwner: '/html/body/div/div/table[1]'
}

class HomePage extends FedexBasePage {
    constructor() {
        super(selectors, '');
    }

    async navigateToFindOwner() {
        await this.waitForElementClickable('findOwner', timeout.LONG)
        await this.click('findOwner');
    }
    async navigateToAddOwner() {
        await this.waitForElementClickable('addOwner', timeout.LONG)
        await this.click('addOwner');
    }
    async firstnameFieldValidation(Firstname: string) {
        await this.waitForElementVisible('firstName', timeout.LONG)
        await this.sendKeys('firstName', Firstname)
    }
    async lastnameFieldValidation(Lastname: string) {
        await this.waitForElementVisible('lastName', timeout.LONG)
        await this.sendKeys('lastName', Lastname)
    }
    async addressFieldValidation(Address: string) {
        await this.waitForElementVisible('addressField', timeout.LONG)
        await this.sendKeys('addressField', Address)
    }
    async cityFieldValidation(City: string) {
        await this.waitForElementVisible('cityField', timeout.LONG)
        await this.sendKeys('cityField', City)
    }
    async telephoneNumberValidation(telephone: any) {
        await this.waitForElementVisible('telephoneField', timeout.LONG)
        await this.sendKeys('telephoneField', telephone)
    }
    async AddOwner() {
        await this.waitForElementClickable('nextAddOwner', timeout.LONG)
        await this.click('nextAddOwner');
    }
    async nonNumericValidation(inputNo: { isNaN: () => any; }): Promise<string> {
        const nonNumeric = await inputNo.isNaN()
        //if (inputNo.isNaN){
        return nonNumeric;
    }
    async firstnameFieldErrorMsgValidation(): Promise<string> {
        let FirstnameFieldErrorMsg = await (await this.waitForElementVisible('FirstnameFieldErrorMsg', timeout.LONG)).getText()
        console.log("FirstName field " + FirstnameFieldErrorMsg)
        return FirstnameFieldErrorMsg;
    }
    async lastnameFieldErrorMsgValidation(): Promise<string> {
        let LastnameFieldErrorMsg = await (await this.waitForElementVisible('LastnameFieldErrorMsg', timeout.LONG)).getText()
        console.log("LastName field " + LastnameFieldErrorMsg);
        return LastnameFieldErrorMsg;
    }
    async addressFieldErrorMsgValidation(): Promise<string> {
        let AddressFieldErrorMsg = await (await this.waitForElementVisible('addressFieldErrorMsg', timeout.LONG)).getText()
        console.log("Address field " + AddressFieldErrorMsg);
        return AddressFieldErrorMsg;
    }
    async cityFieldErrorMsgValidation(): Promise<string> {
        let CityFieldErrorMsg = await (await this.waitForElementVisible('cityFieldErrorMsg', timeout.LONG)).getText()
        console.log("City field " + CityFieldErrorMsg);
        return CityFieldErrorMsg;
    }
    async telephoneErrorMsgValidation() {
        let TelephoneFieldFirstErrorMsg = await (await (await this.waitForElementVisible('telephoneFieldErrorMsg', timeout.LONG)).getText()).split('\n');
        console.log("TelephoneFieldFirstErrorMsg: " + TelephoneFieldFirstErrorMsg[0])
        console.log("TelephoneFieldFirstErrorMsg1: " + TelephoneFieldFirstErrorMsg[1])
        return [TelephoneFieldFirstErrorMsg[0], TelephoneFieldFirstErrorMsg[1]];

    }
    async checkOwnerInformationExists() {
        let addOwnerInfo = await (await this.waitForElementVisible('checkOwner', timeout.LONG)).isDisplayed()
        this.log("ISAddOwnerInfoDispalyed? " + addOwnerInfo)
        return addOwnerInfo;
    }
}
const homePage = new HomePage();
export { homePage }
