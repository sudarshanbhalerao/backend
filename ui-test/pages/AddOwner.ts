import { FedexBasePage, timeout } from "qcoe-fedex-ui-test-wdio";
import data from '../data/testdata';

const selectors={
    firstname:'input#firstname',
    lastname:'input#lastname',
    address:'input#address',
    city:'input#city',
    telephone:'input#telephone',
    addownersumbmitbutton:'a.btn.btn-default',
    navigatetofindowner:"a[href='/owners/find']",
    addownerbutton:'button.btn.btn-default',
    addownerinfo:'table.table.table-striped',
    verifyaddOwnerTelephoneDetails:'/html/body/div/div/table[1]/tbody/tr[4]/td',
    verifyaddOwnerCityDetails:'/html/body/div/div/table[1]/tbody/tr[3]/td',
    verifyaddOwnerAddressDetails:'/html/body/div/div/table[1]/tbody/tr[2]/td',
    verifyaddOwnerNameDetails:'/html/body/div/div/table[1]/tbody/tr[1]/td',
    addOwnerPage:'div.container-fluid',
    findOwnerPage:'div.container.xd-container',
    tablelength:'tbody',
}
class HomePage extends FedexBasePage {

    constructor() {
        super (selectors, '');
    }

    //opening petclininc url
    async navigateToPetClinicApp()
    {
        await browser.url(data.APP_URL.BASE_URL);   
        await browser.maximizeWindow();  
    } 

    // navigating to find owner menu
    async navigateToFindOwner() 
    {
        await this.waitForElementClickable('navigatetofindowner', timeout.MEDIUM);
        await (await $(selectors.navigatetofindowner)).click()
    }

    //clicking on add owner button
    async navigateToAddOwner()
     {
        const addOwnerButton = await $(selectors.addownersumbmitbutton)
        await this.waitForElementClickable('addownersumbmitbutton', timeout.MEDIUM);
        addOwnerButton.click()   
    }

    //Adding details name,address,city,telephone to pet clinic app
    public async addNewOwner(data_firstname:any,data_lname:any,data_address:any,data_city:any,data_telephone:any)
    {
      const firstname = await $(selectors.firstname);
      const lastname = await $(selectors.lastname);
      const address = await $(selectors.address);
      const city = await $(selectors.city);
      const telephone = await $(selectors.telephone);
      const addownerbutton = await $(selectors.addownerbutton);

      await firstname.setValue(data_firstname);
      await lastname.setValue(data_lname);
      await address.setValue(data_address)
      await city.setValue(data_city);
      await telephone.setValue(data_telephone)
      await this.waitForElementClickable('addownerbutton', timeout.MEDIUM);
      await addownerbutton.click();

    }

    async findOwnerPage() {
        let findOwnerPage = await $(selectors.findOwnerPage)
        let isDisplayed=findOwnerPage.isDisplayed();
        return isDisplayed;
    }

    async addOwnerPage() {
        let addOwnerPage = await $(selectors.addOwnerPage)
        let isDisplayed=addOwnerPage.isDisplayed();
        return isDisplayed;
    }
    
    // getting data from table element for validation
        public async verifyAddOwnerDetails()
        {  
            let length = selectors.tablelength.length;
    
            for(let i=1;i<=length-1;i++)
            {
                let details= await(await $("/html/body/div/div/table[1]/tbody/tr["+i+"]/td")).getText();
                data.ActualOwnerData.push(details);
           }
        }
}


const homePage = new HomePage();
export { homePage }
