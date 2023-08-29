import { LightningElement, wire } from 'lwc';
import getTopSeller from '@salesforce/apex/TopSeller.getTopSeller';

export default class TopSeller extends LightningElement {
    brokerName;
    priceSold;

    @wire(getTopSeller)
    topSeller(ts) {
        const closerData = ts?.data;
        if (closerData && closerData.length) {
            this.brokerName = closerData[0].Broker__r.Name;
            this.priceSold = closerData[0].Price_Sold__c;
        }
    }
}