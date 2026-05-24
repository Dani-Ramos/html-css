let tipoAtual = "";
let arquivoAtual = "";

function abrirLivro(arquivo, titulo) {
  
  arquivoAtual = arquivo;
  tipoAtual = arquivo.split('.').pop();
  
  document.getElementById("tituloLivro").innerText = titulo;
  document.getElementById("tituloImg").innerText = titulo;
  
  document.getElementById("gridLivros").style.display = "none";
  
  if (tipoAtual === "pdf") {
    
    document.getElementById("viewerPDF").style.display = "block";
    
    // CHAMADA LOCAL SEGURA: Abre o PDF dentro do visualizador offline sem opção de baixar
    // O 'file=' aponta para o caminho relativo do teu livro
    document.getElementById("pdfFrame").src = "pdfjs/web/viewer.html?file=../../" + arquivo;
    
  } else {
    
    document.getElementById("viewerIMG").style.display = "block";
    document.getElementById("imgLivro").src = arquivo;
    
  }
}

function voltar() {
  document.getElementById("viewerPDF").style.display = "none";
  document.getElementById("viewerIMG").style.display = "none";
  document.getElementById("gridLivros").style.display = "grid";
}

function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}