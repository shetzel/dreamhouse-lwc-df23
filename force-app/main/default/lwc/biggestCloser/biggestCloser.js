import { LightningElement, wire, api } from 'lwc';
import getBiggestCloser from '@salesforce/apex/PropertyController.getBiggestCloser';

export default class BiggestCloser extends LightningElement {
    brokerName;
    priceSold;

    @wire(getBiggestCloser)
    biggestCloser(bigCloser) {
        const closerData = bigCloser?.data;
        if (closerData && closerData.length) {
            this.brokerName = closerData[0].Broker__r.Name;
            this.priceSold = closerData[0].Price_Sold__c;
        }
    }
}