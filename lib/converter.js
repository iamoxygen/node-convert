const path = require("path");
const fs = require("fs").promises;

const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

const { exec } = require("child_process");

exports.pdfToDocx = async (input, output) => {
  try {
    const ext = ".docx";
    const inputPath = path.join(__dirname, input).replace("/lib", "");

    const outputPath = path
      .join(__dirname, `/resources/files${ext}`)
      .replace("/lib", "");

    // Read file
    const docxBuf = await fs.readFile(inputPath);

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

    // Here in done you have pdf file which you can save or transfer in another stream
    await fs.writeFile(outputPath, pdfBuf);
  } catch (err) {
    console.log(err);
  }
};

