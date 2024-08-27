import sys
from pdf2docx import Converter

def convert_pdf_to_docx(pdf_file):
    cv = Converter(pdf_file)
    cv.convert()
    cv.save()

if __name__ == '__main__':
    pdf_file = sys.argv[1]
    convert_pdf_to_docx(pdf_file)