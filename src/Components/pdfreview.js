import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import resumepdf from '../pdfdocs/resume.pdf'


const PDFViewer = () => {
  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
      <Viewer file= {resumepdf} />
    </Worker>
  );
};

export default PDFViewer;
