**PDF to DOCX Converter**
=========================

### Overview

A Node.js and Express-based tool that converts PDF files to DOCX format using a Python script and the `python-shell` package.

### Features

* Converts PDF files to editable DOCX format
* Uses a Python script for conversion, leveraging the `pdf2docx` library
* Built with Node.js and Express for a scalable and efficient server-side solution
* Utilizes `python-shell` package (v5) for seamless integration with Python script

### Usage

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Send a POST request to `http://localhost:8000/api/convert` endpoint with the PDF file attached
4. Receive the converted DOCX file in response
5. Development Server : `npm run dev`: Starts the development server with nodemon, automatically restarting the server on file changes.

### API Endpoint

* **POST /convert**
	+ Request Body: PDF file (multipart/form-data)
	+ Response: DOCX file (application/vnd.openxmlformats-officedocument.wordprocessingml.document)

### Python Script

The Python script `convert-pdf-to-docx.py` is used for the conversion process. It leverages the `pdf2docx` library to perform the conversion.

### Installing pdf2docx

1. Create a virtual environment for Python: `python -m venv venv`
2. Activate the virtual environment: `source venv/bin/activate` (on Linux/Mac) or `venv\Scripts\activate` (on Windows)
3. Install `pdf2docx` using pip: `pip install pdf2docx`

### Requirements

* Node.js (v14+)
* Express (v4+)
* `python-shell` package (v1+)
* Python (v3+)
* `pdf2docx` library (v1+)
