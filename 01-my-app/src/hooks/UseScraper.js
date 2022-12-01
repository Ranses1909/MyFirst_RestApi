const puppeteer = require('puppeteer');

const useScrap = async()=>{
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage()
  await page.goto('https://kbdfans.com/collections/ready-to-use')
   
  const grabFather = await page.evaluate(()=>{
    const father = document.querySelectorAll('.grid-flex.large-row .product-block.one-fifth.small-down--one-whole.grid-flex__item')
    
    const arrayData = []
    father.forEach((el)=>{
    const img = el.querySelector('div.rimage-background.fade-in.lazyload')
    const actualImg = img.getAttribute("data-bgset")
    const price = el.querySelector('div.product-price .theme-money').innerText;
    // Just querySelector is used here
    const description = el.querySelector("div.product-block__title .product-block__title-link").innerText;
    arrayData.push({
      description,
      price,
       actualImg,
    });
  });
  return arrayData
}) 
console.log(grabFather)
  await browser.close()
}
export default useScrap;
