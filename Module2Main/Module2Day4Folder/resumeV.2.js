let toggleAlignItems = true;

function moveHeader() {
    var content = document.getElementById('hiddenContent');
    content.classList.toggle('hidden');
    var mainHeader = document.getElementById("mainHeader");
    mainHeader.style.maxHeight = (mainHeader.style.maxHeight === '200px') ? '100vh' : '200px';
}

function showSection(sectionId) {
    var mainContent = document.getElementById(sectionId);
    mainContent.style.opacity = (mainContent.style.opacity === '1') ? '1' : '1';
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
    section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }