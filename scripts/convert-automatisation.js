const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertAutomatisation() {
  const inputPath = path.join(__dirname, '../public/images/automatisation.png');
  const outputPath = path.join(__dirname, '../public/images/services/automatisation.avif');

  try {
    // Create services directory if it doesn't exist
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    await sharp(inputPath)
      .avif({ quality: 80, effort: 9 })
      .toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ Converted automatisation.png to AVIF`);
    console.log(`  ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% reduction)`);
    console.log(`  Output: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Failed to convert:`, error.message);
  }
}

convertAutomatisation();
