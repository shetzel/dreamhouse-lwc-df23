/**
 * @description Class to determine the top selling broker.
 */
public with sharing class TopSeller {
    /**
     * @description Returns the top selling broker and price sold
     * @return broker name and price sold
     */
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getTopSeller() {
        List<Property__c> properties = [SELECT Broker__r.Name, Price_Sold__c
                                  FROM Property__c
                                  WHERE Price_Sold__c > 0
                                  WITH USER_MODE
                                  ORDER BY Price_Sold__c DESC
                                  LIMIT 1];
        return properties;
    }
}