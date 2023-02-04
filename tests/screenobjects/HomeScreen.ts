import { expect } from 'chai'


class HomeScreen {

    get listView() {
        return  $(`//android.widget.ListView`)
    }

    get bandSelectorList() {
        let bandName =  "new UiSelector().resourceId(\"com.energyaustralia.codingtestsample:id/titleTextView\")";
        let bandSelectorListElement =  $$(`android=${bandName}`)
        return bandSelectorListElement
    }

    get festivalSelectorList() {
        let festivalName =  "new UiSelector().resourceId(\"com.energyaustralia.codingtestsample:id/festivalTextView\")";
        let festivalSelectorListElement =  $$(`android=${festivalName}`)
        return festivalSelectorListElement
    }

    async verifyListViewIsDisplayed() {
        expect(await this.listView.isDisplayed()).to.be.true;
        return true;
    }

    async verifyListViewHasRecords() {
        expect(await this.listView.isDisplayed()).to.be.true;
       // console.log('*****************'+await this.bandSelectorList.length)
        expect(await this.bandSelectorList.length).to.be.above(2);
        return true;
    }

    async verifyListViewisScrollable() {
        await this.verifyListViewHasRecords();
        // Get the scroll height and client height of the list view element
        await this.listView.getAttribute('scrollable').then((value: string) => {
        expect(value).to.be.equals('true');
        });
        return true;
    }
    async addScreenshotToReport(name:string)
    {
      driver.takeScreenshot().then(screenshot => {
            // Add the screenshot to the Allure report
            //@ts-ignore
            allure.addAttachment(name, () => {
                return Buffer.from(screenshot, 'base64');
            }, 'image/png')();
        }); 
    }
   

    async scrollDown(size: any)
    {
     driver.touchAction([
        { action: 'press', x: size.width / 2, y: size.height - 10 },
        { action: 'wait', ms: 1000 },
        { action: 'moveTo', x: size.width / 2, y: 10 },
        { action: 'release' }
      ])
    }

    async scrollUp(size: any)
    {
       driver.touchAction([
        { action: 'press', x: size.width / 2, y: 100 },
        { action: 'wait', ms: 1000 },
        { action: 'moveTo', x: size.width / 2, y: size.height - 100 },
        { action: 'release' }
      ])
    }
}

export default new HomeScreen();