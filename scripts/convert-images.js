const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .avif({ quality: 80, effort: 9 })
      .toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ Converted ${path.basename(inputPath)}`);
    console.log(`  ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% reduction)`);
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('Converting PNG images to AVIF...\n');

  // Convert hero-binoculars.png
  await convertImage(
    path.join(__dirname, '../public/hero-binoculars.png'),
    path.join(__dirname, '../public/hero-binoculars.avif')
  );

  console.log('\n✓ Image conversion complete!');
}

main();
