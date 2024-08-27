const { PythonShell } = require("python-shell");

exports.convertor = (req, res) => {
  try {
    const pdfFile = req.file.path;
    const { from, to } = req.query;

    if (from === "pdf" && to === "docx") {
      const options = {
        mode: "text",
        pythonPath: "python",
        pythonOptions: ["-u"],
        scriptPath: "./",
        args: [pdfFile],
      };

      const pyshell = new PythonShell("convert_pdf_to_docx.py", options);

      pyshell.on("message", (message) => {
        // Handle the result
        res.send(message);
      });

      pyshell.end((err) => {
        if (err) {
          // Handle the error
          res.status(500).send(err);
        }
      });
    } else {
      res.status(400).send({ message: "Please selected type to change from to" });
    }
  } catch (err) {
    res.status(500).send({ message: "internal server error" });
  }
};
