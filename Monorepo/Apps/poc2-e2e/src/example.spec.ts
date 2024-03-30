import { test, expect } from '@playwright/test';
import exp = require('constants');
import * as fs from 'fs';
const options = [
  { value: 'Accessories', label: 'Accessories' },
  { value: 'Category', label: 'Category' },
  { value: 'Products', label: 'Products' },

];

let mockJson: any = {
  "headerLink": ["Vehicles", "Shop", "Services & Support"],
  "subHeader": ["Shop Parts", "Resources"],
  "bannerFooter": ["Save $20 on orders", "Free shipping!, that right, Shipping is on us.", "Order now and we ll give five"],
  "CarouselData": [
    {
      "img": "/windShield.png",
      "alt": "Image 1",
      "className": "w-full h-64 mt-5",
      "content": "Windshield Wiper Blade-24\",Left",
      "buttonClass": "text-xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
      "buttonValue": "View",
      "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
      "textClass": "mx-10  text-xl h-56"
    },
    {
      "img": "/discBrake.png",
      "alt": "Image 2",
      "className": "w-full h-64 mt-5",
      "content": "Disc BRake Pad Set. Kit-Front",
      "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
      "buttonValue": "View",
      "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
      "textClass": "mx-10  text-xl  "
    },
    {
      "img": "/sealedBeam.png",
      "alt": "Image 2",
      "className": "w-full h-64 mt-5",
      "content": "Sealed Beam HeadLight-Left, Front(Base,GT)",
      "buttonClass": "text-xl bg-black font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
      "buttonValue": "View",
      "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
      "textClass": "mx-10 h-32 text-xl"
    },
    {
      "img": "/cabinFilter.png",
      "alt": "Image 2",
      "className": "w-full h-64 mt-5",
      "content": "Cabin Air FIlter. Filter ODOUR and P.",
      "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
      "buttonValue": "View",
      "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
      "textClass": "mx-10 h-32 text-xl"
    },
    {
      "img": "/discBrake.png",
      "alt": "Image 2",
      "className": "w-full h-64 mt-5",
      "content": "Disc BRake Pad Set. Kit-Front",
      "buttonClass": "text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded mx-10 my-5",
      "buttonValue": "View",
      "cardClass": "border-2 border-gray-200 mx-10 rounded w-3/4",
      "textClass": "mx-10 text-xl"
    }
  ],
  "tabData": [
    {
      "tabTitle": "Accessories",
      "tabContent": "Discover amazing products and services",
      "cardProps": [
        { "img": "/interiorAccessories.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full  ", "alt": "Acw-64cessory", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Interior Accessories-Mustang Floor Mats", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5", "buttonValue": "view", "textClass": "text-xl cardText " },
        { "img": "/exteriorAccessories.png", "cardClass": "mx-10 border-2 border-gray-200 rounded w-full", "className": "w-full h-64 rounded-t custom-styles-div", "content": "Exterior Accessories-20' Machined-Face Wheel", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/safetyAccessories.png", "cardClass": "mx-10 border-2 border-gray-200 rounded w-full", "alt": "Accessory 1", "className": " w-full h-64 rounded-t  custom-styles-div", "content": "Safety Accessories-Premium Safety Kit", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/otherAccessories.png", "cardClass": "mx-10 border-2 border-gray-200 rounded w-full", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t  custom-styles-div", "content": "Other Accessories-Bronco S Cargo Area Mat", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " }


      ]
    },
    {
      "tabTitle": "Maintenance",
      "tabContent": "Discover amazing products and services",

      "cardProps": [
        { "img": "/blackBrakes.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "F56DRW- Platinum Black Brakes", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded  my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/engineFilter.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t  custom-styles-div", "content": "Engine Air Filter", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/fluids.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64  rounded-t custom-styles-div", "content": "Fluids, Chemicals & Lubricants", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/wipers.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div ", "content": "Wipers and Washers", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " }


      ]
    },
    {
      "tabTitle": "Power Train",
      "tabContent": "Discover amazing products and services",
      "cardProps": [
        { "img": "/performanceEngine.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full", "alt": "Accessory", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Ford Performacne-Engine", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText  " },
        { "img": "/Transmission.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div ", "content": "Transmission", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/exhaust.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Exhaust", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " },
        { "img": "/suspension.png", "cardClass": "border-2 border-gray-200 mx-10 rounded w-full ", "alt": "Accessory 1", "className": "w-full  h-64 rounded-t custom-styles-div", "content": "Suspension", "buttonClass": "custom-btn-cls text-1xl font-bold text-blue-700 border-2 border-blue-700 px-7 py-2 rounded   my-5", "buttonValue": "view", "textClass": "text-xl h-32 cardText " }


      ]
    }
  ],
  "explorerData": [
    {
      "imgsrc": "icons/battery.png",
      "alt": "Battery",
      "text": "Battery"
    }, {
      "imgsrc": "icons/transmission.png",
      "alt": "transmission",
      "text": "Transmission"
    },
    {
      "imgsrc": "icons/wiper.png",
      "alt": "Wiper",
      "text": "Wiper blade"
    },
    {
      "imgsrc": "icons/airfilter.png",
      "alt": "Air Filter",
      "text": "Air filter"
    },

    {
      "imgsrc": "icons/brakes.png",
      "alt": "brakes",
      "text": "Brakes"
    },
    {
      "imgsrc": "icons/mirror.png",
      "alt": "Side Mirror",
      "text": "Side Mirror"
    }



  ],
  "footerInfo": [
    {
      "heading": "All vehicles",
      "links": ["SUVs & Crossovers", "Trucks & Vans", "Cars", "Electrified", "Commercial vehicles", "Future vehicles", "Certicied Used", "Fleet Vehicles", "All Vehicles", "Performance Vehicles"]
    }, {
      "heading": "Shopping Tools",
      "links": ["Build & Price", "Search Inventory", "Get a Quote", "Curent Offers", "Trade-In Value", "TOwing Gudies", "Compare Vehicles", "Get updates", "Certified used inventory"]
    }, {
      "heading": "Finance",
      "links": ["Ford Credit Home", "Why Ford Credit", "Finance Options", "Payment calculator", "Credit Education", "Customer Support", "Qualify for financing", "Ford Credit Account", "Ford Insure", "Ford Interest Advantage", "Investor Center"]
    },
    {
      "heading": "Support",
      "links": ["Support Home", "Maintenace Schedule", "Your warranty", "Coupons & offers", "Redeem Rebates", "SYNC & Technology", "Owner Manuals", "Locate a Dealer", "Ford Parts", "Contact Us", "Roadside Assistance", "Ford Protect", "Recalls", "Takata Airbag Recalls", "Tire Finder", "How-To Videos"]
    },
    {
      "heading": "Experience Ford",
      "links": ["Corporate", "Careerws", "Investor", "Company News", "About Ford", "Racing", "Accessories Store", "Warriors in Pink", "Ford Mechandise", "Ford Motor Company Fund", "SYNC", "Connected Navigation", "FordPass", "Ford Co-Pilot360 Technology", "Ford Telematics", "Accessibility Program"]
    }
  ],
  "footer": ["2023 Ford Motor Company", "Site Map", "Glossary", "Contact Us", "Accessibility", "Terms & Conditions", "Privacy Notice", "Cookie Settings", "Your Privacy Choices", "Interest Based Ads", "Third Party Trademarks"]
  , "text": ['Popular', 'Lightning', 'Bronco', 'Experience Ford']
}

test('load header links and navigate successfully', async ({ page }) => {
  const url = 'http://localhost:4200/'
  for (const link of mockJson.headerLink) {
    await page.goto(url);
    const linkElement = page.getByRole('link', { name: link, exact: true });
    await linkElement.click();
    const expectedURL = url + (link.indexOf(' ') >= 0 ? `${link.split(' ')[0].toLowerCase()}` : `${link.toLowerCase()}`);
    const receivedURL = (page.url().toLowerCase());

    expect(receivedURL).toEqual(expectedURL);
  }


});
test('load subheader links and navigate successfully', async ({ page }) => {
  const url = 'http://localhost:4200/'
  for (const link of mockJson.subHeader) {
    await page.goto(url);
    const linkElement = page.getByRole('link', { name: link, exact: true });
    await linkElement.click();
    const expectedURL = url + (link.indexOf(' ') >= 0 ? `${link.split(' ')[0].toLowerCase()}` : `${link.toLowerCase()}`);
    const receivedURL = (page.url().toLowerCase());
    expect(receivedURL).toEqual(expectedURL);
  }


});
test('SearchBar component test', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.click('div.react-dropdown-select');
  await page.click('.react-dropdown-select-item');
  const selectedValue = await page.innerText('div.react-dropdown-select-type-single span');
  expect(selectedValue).toBe('Accessories');

}); 
test('banner text',async({page})=>{
  await page.goto('http://localhost:4200');
  const bannerData = await page.textContent('.bannerClass h1');
  expect(bannerData).toBe('FORD PARTS');
  const bannerText=await page.textContent('.bannerClass p')
  expect(bannerText).toBe('Right for your vehicle')
})
test('banner Footer data ', async ({ page }) => {
  await page.goto('http://localhost:4200');
  for (const data of mockJson.bannerFooter) {
    const dataPresent = await page.waitForSelector(`text=${data}`);
    expect(dataPresent).not.toBeNull();
  }
})

test('footer should render successfully with correct data', async ({ page }) => {
  await page.goto('http://localhost:4200');
  const footer=await page.textContent('footer a ');
  expect(footer).toBe('Change language')

  const footerLinks = await page.$$('footer nav a');
  const divValues = [];
  for (const link of footerLinks) {
      const linkText = await link.textContent();
      divValues.push(linkText);
  }
  expect(divValues).toEqual(mockJson.footer);


});

test('button renders successfully with correct value', async ({ page }) => {
  await page.goto('http://localhost:4200');
  const buttonValue = await page.textContent('button')
  expect(buttonValue).toBe('View')
});
test('cards should render successfuly with correct data', async ({ page }) => {
  await page.goto('http://localhost:4200');
  for (const data of mockJson.CarouselData) {
    const dataPresent = await page.waitForSelector(`text = ${data.content} `);
    expect(dataPresent).not.toBeNull();
  }
})

test('tab changes', async ({ page }) => {
  await page.goto('http://localhost:4200');

  for (const data of mockJson.tabData) {
    await page.click(`button:text("${data.tabTitle}")`);
    await page.waitForTimeout(1000);
    for (const cardProp of data.cardProps) {
      const tabContent = await page.textContent(`.cardText:has-text("${cardProp.content}")`);
      expect(tabContent).toEqual(cardProp.content);
    }
  }
});
test('Image Component Test', async ({ page }) => {
  await page.goto('http://localhost:4200');
  const image = await page.$('img');
  const isVisible = await image.isVisible();
  expect(isVisible).toBe(true);
  const altText = await image.getAttribute('alt');
  expect(altText).not.toBe('');
  const src = await image.getAttribute('src');
  expect(src).toMatch(/\.jpg|\.jpeg|\.png|\.svg|\.gif$/i); 
}); 
test('text', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.waitForSelector('.custom-pop-div p')
  const divElements = await page.$$('.custom-pop-div p');
  const divValues = [];
  for (const div of divElements) {
    const divValue = await div.innerText();
    divValues.push(divValue);
  }

  expect(divValues).toEqual(mockJson.text);
})
test('Test React Icons with Font Awesome', async ({ page }) => {
  await page.goto('http://localhost:4200');
 await page.waitForSelector('.flex.mx-10.py-2');
 const svgElementInfo = [];
 const divElements = await page.$$('.flex.mx-10.py-2');
 for (const div of divElements) {
   const svgElements = await div.$$('svg');
   for (const svgElement of svgElements) {
     const svgContent = await page.evaluate(element => element.outerHTML, svgElement);
     svgElementInfo.push(svgContent);
   }
 }
 expect(svgElementInfo).toHaveLength(3);
}); 

test('footer links render and navigate successfully', async ({ page }) => {
  const url = 'http://localhost:4200/';

  for (const data of mockJson.footerInfo) {
    await page.goto('http://localhost:4200');

    await page.waitForSelector('.footerHeading');
    const headingValue = await page.textContent('.footerHeading');

    if (headingValue) {
      for (const link of data.links) {
        await page.goto('http://localhost:4200');
        const linkElement = await page.waitForSelector(`a:has-text("${link}")`);
        await linkElement.click();
      //   const expectedURL = url + (link.indexOf(' ') >= 0 ? `${link.split(' ')[0].toLowerCase()}` : `${link.toLowerCase()}`);
      //   const receivedURL = page.url().toLowerCase();
      //  console.log('receivedURL111', receivedURL);
      //   expect(receivedURL).toEqual(expectedURL);
      //   await page.goBack();
      }
    }
  }
});


test('React Alice Carousel Test', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.waitForSelector('.alice-carousel');
  const carousel = await page.$('.alice-carousel');
  expect(carousel).not.toBeNull();

  await page.click('.alice-carousel__next-btn');
  await page.waitForTimeout(1000);

  await page.click('.alice-carousel__prev-btn');
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'carousel.png' });
});

test('explore parts', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.waitForSelector('#ExpolorParts');
  const h2Value = await page.textContent('#ExpolorParts');
  expect(h2Value).toBe('Explore all parts');
  const divElements = await page.$$('.explorerParts');
  const divValues = [];
  const explorerValues = [];
  for (const div of divElements) {
    const divValue = await div.textContent();
    divValues.push(divValue);
  }
  for (const data of mockJson.explorerData) {
    explorerValues.push(data.text)
  }
  expect(divValues).toEqual(explorerValues);
})


test('Test React Icons with Font Awesome', async ({ page }) => {
  await page.goto('http://localhost:4200');
 await page.waitForSelector('.flex.mx-10.py-2');
 const svgElementInfo = [];
 const divElements = await page.$$('.flex.mx-10.py-2');
 for (const div of divElements) {
   const svgElements = await div.$$('svg');
   for (const svgElement of svgElements) {
     const svgContent = await page.evaluate(element => element.outerHTML, svgElement);
     svgElementInfo.push(svgContent);
   }
 }
 expect(svgElementInfo).toHaveLength(3);
});