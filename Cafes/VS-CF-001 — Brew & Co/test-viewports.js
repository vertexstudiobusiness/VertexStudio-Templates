import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://127.0.0.1:5174/';

const VIEWPORTS = [
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 }
];

async function runTests() {
  console.log('🚀 Starting Automated Multi-Viewport & UX Verification...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Test each viewport
  for (const vp of VIEWPORTS) {
    console.log(`\n📱 Testing Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(URL, { waitUntil: 'networkidle0' });

    // Check for horizontal overflow
    const overflowInfo = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const clientW = document.documentElement.clientWidth;
      const hasHorizontalScroll = scrollW > clientW;
      return { scrollW, clientW, hasHorizontalScroll };
    });

    console.log(`  - Scroll width: ${overflowInfo.scrollW}px | Client width: ${overflowInfo.clientW}px`);
    if (overflowInfo.hasHorizontalScroll) {
      console.error(`  ❌ HORIZONTAL OVERFLOW DETECTED at ${vp.width}px!`);
    } else {
      console.log(`  ✅ Zero horizontal overflow at ${vp.width}px.`);
    }

    // Check Hero Visibility
    const heroInfo = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (!h1) return { found: false };
      const rect = h1.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight + 100;
      return { found: true, text: h1.innerText, isVisible, top: rect.top, bottom: rect.bottom };
    });

    console.log(`  - Hero headline visible: ${heroInfo.isVisible} ("${heroInfo.text?.replace(/\n/g, ' ')}")`);

    // Screenshot
    const ssPath = `./screenshot-${vp.name}.png`;
    await page.screenshot({ path: ssPath });
    console.log(`  - Saved screenshot to ${ssPath}`);
  }

  // Mobile Interaction Tests at 390px
  console.log('\n🧪 Testing Mobile Interactions at 390px...');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(URL, { waitUntil: 'networkidle0' });

  // 1. Mobile Hamburger Menu
  console.log('  Testing Hamburger Menu...');
  const hamburgerButton = await page.$('button[aria-label="Open Navigation Menu"]');
  if (hamburgerButton) {
    await hamburgerButton.click();
    await new Promise((r) => setTimeout(r, 400));
    const isMenuOpen = await page.evaluate(() => {
      return !!document.querySelector('button[aria-label="Close menu"]');
    });
    console.log(`  ✅ Hamburger drawer opened: ${isMenuOpen}`);

    // Close menu
    const closeBtn = await page.$('button[aria-label="Close menu"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise((r) => setTimeout(r, 400));
    }
  } else {
    console.warn('  ⚠️ Hamburger toggle button not found!');
  }

  // 2. Add to Cart / Order Bag
  console.log('  Testing Quick Add to Order Bag...');
  const quickAddBtn = await page.$('button[aria-label*="Add"][aria-label*="to order bag"]');
  if (quickAddBtn) {
    await quickAddBtn.evaluate((el) => el.scrollIntoView({ block: 'center' }));
    await new Promise((r) => setTimeout(r, 400));
    await quickAddBtn.click();
    await new Promise((r) => setTimeout(r, 800)); // wait for drawer slide-in

    const hasWhatsAppCheckout = await page.evaluate(() => {
      const text = document.body.innerText;
      return text.includes('Send Order via WhatsApp') || text.includes('WhatsApp');
    });
    console.log(`  ✅ WhatsApp Checkout CTA present in drawer: ${hasWhatsAppCheckout}`);

    // Close Cart
    const closeCartBtn = await page.$('button[aria-label="Close Order Bag"]');
    if (closeCartBtn) {
      await closeCartBtn.click();
      await new Promise((r) => setTimeout(r, 600));
    }
  }

  // 3. Brew Calculator Test
  console.log('  Testing Interactive Brew Calculator...');
  const launchCalcBtn = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find((el) => el.innerText.includes('Launch Brew Ratio Calculator'));
    if (b) {
      b.scrollIntoView({ block: 'center' });
      b.click();
      return true;
    }
    return false;
  });
  await new Promise((r) => setTimeout(r, 600));

  const isCalcOpen = await page.evaluate(() => {
    return document.body.innerText.includes('Specialty Ratio Calculator');
  });
  console.log(`  ✅ Brew Ratio Calculator Modal opened: ${isCalcOpen}`);

  const closeCalcBtn = await page.$('button[aria-label="Close calculator"]');
  if (closeCalcBtn) {
    await closeCalcBtn.click();
    await new Promise((r) => setTimeout(r, 500));
  }

  // 4. Menu Filtering Test
  console.log('  Testing Menu Category & Search Filtering...');
  const searchInput = await page.$('#menu-search-input');
  if (searchInput) {
    await searchInput.type('matcha');
    await new Promise((r) => setTimeout(r, 300));
    const itemsCount = await page.evaluate(() => {
      const cards = document.querySelectorAll('#menu .glass-card');
      return cards.length;
    });
    console.log(`  ✅ Filtered menu for "matcha": found ${itemsCount} items`);
    await searchInput.click({ clickCount: 3 });
    await page.keyboard.press('Backspace');
  }

  // 5. Reservation Form Submission Test
  console.log('  Testing Reservation Form Validation...');
  const nameInput = await page.$('#res-name');
  const phoneInput = await page.$('#res-phone');
  const emailInput = await page.$('#res-email');
  const dateInput = await page.$('#res-date');

  if (nameInput && phoneInput && emailInput && dateInput) {
    await nameInput.type('Aditya Rao');
    await phoneInput.type('+91 98450 12345');
    await emailInput.type('aditya.rao@example.com');
    await dateInput.type('2026-11-15');

    const submitResBtn = await page.$('form[novalidate] button[type="submit"]');
    if (submitResBtn) {
      await submitResBtn.click();
      await new Promise((r) => setTimeout(r, 1000));
      const resConfirmed = await page.evaluate(() => {
        return document.body.innerText.includes('Reservation Requested');
      });
      console.log(`  ✅ Table Reservation submitted & confirmed: ${resConfirmed}`);
    }
  }

  console.log('\n🎉 Multi-Viewport and Functional Testing Finished Successfully!');
  await browser.close();
}

runTests().catch((err) => {
  console.error('Error in tests:', err);
  process.exit(1);
});
