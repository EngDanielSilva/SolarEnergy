const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxes);
showBoxes();

function showBoxes() {
  const trigger = window.innerHeight * 0.8;

  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;

    if(top < trigger){
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

/* FECHAR TODOS */
function closePanel(){
  document.querySelectorAll(".side-panel, .pdf-viewer")
    .forEach(p => p.classList.remove("active"));
}

/* PDF */
function openPDF(file){
  closePanel();

  renderPDF(file); // 👈 agora usa o viewer profissional

  document.getElementById("pdfViewer").classList.add("active");
}

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

function closePDF(){
  document.getElementById("pdfViewer").classList.remove("active");
}

/* SIMULADOR */
function openSimulator(){
  closePanel();
  document.getElementById("simulator").classList.add("active");
}

function calcular(){
  const consumo = document.getElementById("consumo").value;
  const irradiacao = document.getElementById("irradiacao").value;
  const potencia = document.getElementById("potencia").value;

  const geracao = (potencia/1000) * irradiacao * 30;
  const modulos = consumo / geracao;

  document.getElementById("resultado").innerText =
    "Quantidade estimada: " + Math.ceil(modulos) + " módulos";
}

/* FINANCEIRO */
function showFinancing(){
  closePanel();
  document.getElementById("finance").classList.add("active");
}

/* FORNECEDORES */
function showSuppliers(){
  closePanel();
  document.getElementById("suppliers").classList.add("active");
}

// BLOQUEAR clique direito
document.addEventListener("contextmenu", e => e.preventDefault());

// BLOQUEAR atalhos
document.addEventListener("keydown", function(e) {
  if (
    e.ctrlKey &&
    (e.key === "s" || e.key === "p" || e.key === "u")
  ) {
    e.preventDefault();
  }
});