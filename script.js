// Показать/скрыть дополнительные блюда
document.getElementById("toggleMenu").addEventListener("click", function() {
    const hiddenItems = document.querySelectorAll(".menu-item.hidden");
    const btn = document.getElementById("toggleMenu");
  
    hiddenItems.forEach(item => {
      if (item.style.display === "block") {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
  
    btn.textContent = (btn.textContent === "Показать ещё") ? "Скрыть" : "Показать ещё";
  });
  