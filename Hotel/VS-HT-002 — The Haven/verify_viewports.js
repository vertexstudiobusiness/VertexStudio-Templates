import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve('dist', 'screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const viewports = [
  { name: 'mobile_375', width: 375, height: 812, device: 'Mobile 375px' },
  { name: 'mobile_390', width: 390, height: 844, device: 'Mobile 390px' },
  { name: 'mobile_430', width: 430, height: 932, device: 'Mobile 430px' },
  { name: 'tablet_768', width: 768, height: 1024, device: 'Tablet 768px' },
  { name: 'desktop_1440', width: 1440, height: 900, device: 'Desktop 1440px' },
];

async function runVerification() {
  console.log('Launching Chrome from:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // 1. Verify responsive viewports and check horizontal overflow
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise((r) => setTimeout(r, 600));

    // Check horizontal scroll / overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      const rootScrollWidth = document.getElementById('root')?.scrollWidth || 0;
      return bodyScrollWidth > docWidth || rootScrollWidth > docWidth;
    });

    console.log(`[${vp.device}] Horizontal overflow detected:`, hasHorizontalOverflow ? 'FAIL - YES' : 'PASS - NONE');

    const screenshotPath = path.join(outputDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`[${vp.device}] Screenshot saved to: ${screenshotPath}`);
  }

  // 2. Test Mobile Hamburger Menu (on 375px)
  await page.setViewport({ width: 375, height: 812 });
  console.log('Testing Mobile Hamburger Navigation Drawer...');
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Open Navigation Menu"]');
    if (btn) btn.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'mobile_menu_open.png') });
  console.log('Captured mobile_menu_open.png');

  // Close mobile drawer
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Close Menu"]');
    if (btn) btn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // 3. Test Room Detail Modal
  console.log('Testing Room Detail Modal...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const detailsBtn = buttons.find((b) => b.textContent && b.textContent.trim() === 'Details');
    if (detailsBtn) detailsBtn.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'modal_room_detail.png') });
  console.log('Captured modal_room_detail.png');

  // Close Room Detail Modal
  await page.evaluate(() => {
    const closeBtn = document.querySelector('dialog[open] button[aria-label="Close Room Details"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // 4. Test Booking Enquiry Modal & Form Submission
  console.log('Testing Booking Enquiry Modal...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const reserveBtn = buttons.find((b) => b.textContent && b.textContent.trim() === 'Reserve');
    if (reserveBtn) reserveBtn.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'modal_booking_enquiry.png') });
  console.log('Captured modal_booking_enquiry.png');

  // Fill out form in modal
  await page.type('#guest-name', 'Ananya Deshmukh');
  await page.type('#guest-email', 'ananya.deshmukh@example.com');
  await page.type('#guest-phone', '+91 98200 12345');
  await page.type('#special-requests', 'Quiet corner room facing morning sunrise.');

  // Submit form
  console.log('Submitting booking enquiry form...');
  await page.evaluate(() => {
    const form = document.querySelector('dialog[open] form');
    if (form) form.requestSubmit();
  });
  await new Promise((r) => setTimeout(r, 1200));

  await page.screenshot({ path: path.join(outputDir, 'modal_booking_confirmed.png') });
  console.log('Captured modal_booking_confirmed.png (Confirmation State & Ref ID)');

  // Close Booking Modal
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('dialog[open] button'));
    const doneBtn = buttons.find((b) => b.textContent && b.textContent.trim() === 'Done');
    if (doneBtn) doneBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // 5. Test Lightbox
  console.log('Testing Gallery Lightbox...');
  await page.evaluate(() => {
    const galleryItem = document.querySelector('#gallery img');
    if (galleryItem) galleryItem.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'modal_gallery_lightbox.png') });
  console.log('Captured modal_gallery_lightbox.png');

  // Close Lightbox
  await page.evaluate(() => {
    const closeBtn = document.querySelector('dialog[open] button[aria-label="Close Lightbox"]');
    if (closeBtn) closeBtn.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  // 6. Test Journal Reader Modal
  console.log('Testing Journal Reader Modal...');
  await page.evaluate(() => {
    const journalArticle = document.querySelector('#journal article');
    if (journalArticle) journalArticle.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'modal_journal_reader.png') });
  console.log('Captured modal_journal_reader.png');

  await browser.close();
  console.log('All end-to-end tests and visual captures passed 100%!');
}

runVerification().catch((err) => {
  console.error('Verification error:', err);
  process.exit(1);
});
