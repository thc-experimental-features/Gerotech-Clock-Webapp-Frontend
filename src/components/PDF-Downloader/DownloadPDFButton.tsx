import React from "react";
import { pdf } from "@react-pdf/renderer";
import type { DownloadPDFButtonProps } from "../../types";
import PDFDocument from "./PDFDocument";

// When the button is clicked, we generate the PDF blob, create a URL for it, and then trigger a download.
const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ data }) => {
  const handleDownload = async () => {
    try {
      const blob = await pdf(<PDFDocument data={data} />).toBlob();
      const blobURL = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobURL;
      link.download = "persona-card.pdf";
      link.click();
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    >
      Download PDF
    </button>
  );
};

export default DownloadPDFButton;