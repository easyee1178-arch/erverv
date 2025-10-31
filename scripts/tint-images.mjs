import sharp from "sharp";

const green = { r: 21, g: 198, b: 92 };

async function tint(input, output) {
  await sharp(input)
    .tint(green)
    .modulate({ saturation: 1.05, brightness: 1.02 })
    .jpeg({ quality: 85 })
    .toFile(output);
}

async function run() {
  try {
    await Promise.all([
      tint("public/bg.jpg", "public/bg-tinted.jpg"),
      tint("public/footer-bg.jpg", "public/footer-bg-tinted.jpg"),
    ]);
    console.log("Tinted images created: bg-tinted.jpg, footer-bg-tinted.jpg");
  } catch (e) {
    console.error("Tint failed:", e);
    process.exit(1);
  }
}

run();
