// @ts-check
import { test, expect } from '@playwright/test';
import {ai} from '@zerostep/playwright';

test('AI demo test', async ({ page }) => {
  const aiArgs = { page, test }
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

  const costOfTomato  = await ai("What is the Price for Tomato?",aiArgs)
  const discountedPrice = await ai("What is the Discount price for Tomato?",aiArgs)
  const diff = await ai("What is the price difference between the cost and the discounted price of tomato",aiArgs)
  const percentage = await ai("Based on price and discounted price of tomato, what is the exact percentage of discount provided for tomato?",aiArgs)
  expect(costOfTomato).toEqual("37");
  expect(discountedPrice).toEqual("26");
  expect(diff).toEqual("11");
  // console.log(percentage)
  expect(percentage).toEqual("30");
});

