let toggleAlignItems = true;

function moveHeader() {
    var content = document.getElementById('content');
    content.classList.toggle('hidden');
    var mainHeader = document.getElementById("mainHeader");
    mainHeader.style.maxHeight = (mainHeader.style.maxHeight === '200px') ? '100vh' : '200px';
}