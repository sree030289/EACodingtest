import HomeScreen from "../screenobjects/HomeScreen";
import { expect } from 'chai'
import allure from '@wdio/allure-reporter';
describe('WebdriverIO and Appium EA Test coding sample suite,', () => {
    beforeEach(async () => {

    });

    afterEach(async () => {
      await HomeScreen.addScreenshotToReport('AppLoaded')
      await driver.reset();

    });

    it('Verify App is displayed ListView with atleast one record in it', async () => {

      await HomeScreen.verifyListViewIsDisplayed();
      await HomeScreen.verifyListViewHasRecords();
      await HomeScreen.addScreenshotToReport('AppLoaded')

    });
    it('Verify App is loading all 18 Band and Festival Names', async () => {
    
    //verify if at least one record is displayed on app
    await HomeScreen.addScreenshotToReport('AppLoaded')
    await HomeScreen.verifyListViewIsDisplayed();
    await HomeScreen.verifyListViewHasRecords();
    await HomeScreen.verifyListViewisScrollable();

    let totalCount=0;
    let finalCount=0;
    let initialCount=await HomeScreen.bandSelectorList.length;
    let counter=0;
    let lastDisplayedBandName=await HomeScreen.bandSelectorList[initialCount-1]?.getText();
    for (let i=0;i<await HomeScreen.bandSelectorList.length;i++)
        {
            expect(await HomeScreen.bandSelectorList[i]?.getText()).to.not.be.null;
            expect(await HomeScreen.bandSelectorList[i]?.getText()).to.not.be.empty;   
            expect(await HomeScreen.festivalSelectorList[i]?.getText()).to.not.be.null;
            expect(await HomeScreen.festivalSelectorList[i]?.getText()).to.not.be.empty;   
          
            if(i==initialCount-1)
            {
              const width = await HomeScreen.listView.getSize('width');
              const height = await HomeScreen.listView.getSize('height');
              await HomeScreen.listView.touchAction([
                      { action: 'press', x: width/ 2, y: height - 10 },
                      { action: 'wait', ms: 1000 },
                      { action: 'moveTo', x: width / 2, y: 10 },
                      { action: 'release' }
              ])
              await HomeScreen.addScreenshotToReport('AfterScrol')
              for (let j=0;j<await HomeScreen.bandSelectorList.length;j++)
              {
               
                const text=await HomeScreen.bandSelectorList[j]?.getText();
                if(text==lastDisplayedBandName)
                {
                  counter=1;
                }
                if(counter==1)
                {
                  finalCount=finalCount+1;
                  
                }
              }
        }

      }
      totalCount=initialCount+finalCount;
      console.log('initialCount ******:  '+ initialCount )
      console.log('finalCount ******:  '+ finalCount )
      console.log('totalCount ******:  '+ totalCount )
      expect(totalCount).to.be.greaterThanOrEqual(17);      
    });


    it('Verfiy if the list view has results and it is scrollable', async () => {
      
        await HomeScreen.addScreenshotToReport('OnLoad');

        await HomeScreen.verifyListViewHasRecords();
        await HomeScreen.verifyListViewisScrollable();
        const width = await HomeScreen.listView.getSize('width');
        const height = await HomeScreen.listView.getSize('height');
        await HomeScreen.listView.touchAction([
          { action: 'press', x: width/ 2, y: height - 10 },
          { action: 'wait', ms: 1000 },
          { action: 'moveTo', x: width / 2, y: 10 },
          { action: 'release' }
        ])
        await HomeScreen.addScreenshotToReport('List-scroll-down');
    });

    it('Verfiy all Festival names displayed has corresponding band name', async () => {
        //As we dont have complete JSON, we are comparing the values to be not null/ empty /unknowm
        
    await HomeScreen.addScreenshotToReport('AppLoaded')
    await HomeScreen.verifyListViewIsDisplayed();
    await HomeScreen.verifyListViewHasRecords();
    await HomeScreen.verifyListViewisScrollable();

    let totalCount=0;
    let finalCount=0;
    let initialCount=await HomeScreen.bandSelectorList.length;
    let counter=0;
    let lastDisplayedBandName=await HomeScreen.bandSelectorList[initialCount-1]?.getText();
    for (let i=0;i<await HomeScreen.bandSelectorList.length;i++)
        {
            expect(await HomeScreen.bandSelectorList[i]?.getText()).to.not.be.null;
            expect(await HomeScreen.bandSelectorList[i]?.getText()).to.not.be.empty;   
            expect(await HomeScreen.festivalSelectorList[i]?.getText()).to.not.be.null;
            expect(await HomeScreen.festivalSelectorList[i]?.getText()).to.not.be.empty; 
            
            
          
            if(i==initialCount-1)
            {
              const width = await HomeScreen.listView.getSize('width');
              const height = await HomeScreen.listView.getSize('height');
              await HomeScreen.listView.touchAction([
                      { action: 'press', x: width/ 2, y: height - 10 },
                      { action: 'wait', ms: 1000 },
                      { action: 'moveTo', x: width / 2, y: 10 },
                      { action: 'release' }
              ])
              await HomeScreen.addScreenshotToReport('AfterScrol')
              for (let j=0;j<await HomeScreen.bandSelectorList.length;j++)
              {
               
                expect(await HomeScreen.bandSelectorList[i]?.getText()).to.not.be.null;
                expect(await HomeScreen.bandSelectorList[i]?.getText()).to.not.be.empty;   
                expect(await HomeScreen.festivalSelectorList[i]?.getText()).to.not.be.null;
                expect(await HomeScreen.festivalSelectorList[i]?.getText()).to.not.be.empty; 
            
              }
        }

        }     
    });

    it('Verfiy Error screens are captured in case of API returning 429, 400 etc..error codes', async () => {

      // we need to simulte 429 , 400, 500 error messages from API and 
      // verify expected messages are displayed
      // no scripted added f
      await HomeScreen.addScreenshotToReport('OnLoad');
      await HomeScreen.verifyListViewHasRecords();
      //dummy assert to fail
      expect(200).to.be.equal(429);

    });


});
