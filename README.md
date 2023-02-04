# WebdriverIO and Appium EA Test Suite
## Purpose
The purpose of this test suite is to verify the functionality of a mobile app that displays a list view of festival names and corresponding band names.

## Installation
```bash
npm Install
```

## Usage

```bash
I have used WebdriverIO and Typescript for Automating the Android Mobile app. 
The main agenda is to automate the Android mobile App and then find the errors on UI and API
```
## Prerequisites

```bash
1) Use the Android Studio with provided repo to create APK file.
2) For now I have kept it inside /apps/android-ea-festivals.apk.

```
## Test Cases 

```bash
As part of testing this I had created 5 automated test cases
1) Verify that the app is displayed as a list view with at least one record.
2) Verify that the app is loading all 18 band and festival names.
3) Verify that the list view is scrollable and has results.
4) Verify that each festival name displayed has a corresponding band name.
5) Verify that error screens are captured in case of API returning error codes such as 429, 400, 500, or timeouts.

```
## Execution and reports
```bash
To Execute Test cases , run the script from package.json
npm run android.app
npm run ios.app 

ALLURE REPORTING
npm run report

````
## Results Screenshot
![Allure Results 1](resultsImages/allure-Report1.png?raw=true "Allure Results 1")
![Allure Results 2](resultsImages/allure-Report2.png?raw=true "Allure Results 2")



## Error Screenshot
![FewRecordOnly](errorScreenshots/FewRecordOnly.png?raw=true "FewRecordOnly")
![ToomanyRequest](errorScreenshots/ToomanyRequest.png?raw=true "ToomanyRequest")
![zeroRecords](errorScreenshots/zeroRecords.png?raw=true "zeroRecords")


## Errors found
```bash
1) The API is not returning the same response all the time, even with the same query parameters.
2) Errors such as 429, 400, 500, or timeouts are not handled in the mobile code.
3) The API is returning 0 records and is throwing an error. An error screenshot is provided below.
```

