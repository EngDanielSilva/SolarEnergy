pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

async function renderPDF(url) {

  const container = document.getElementById("pdfCanvasContainer");
  container.innerHTML = ""; // limpa antes

  const pdf = await pdfjsLib.getDocument(url).promise;

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {

    const page = await pdf.getPage(pageNum);

    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    container.appendChild(canvas);
  }
}