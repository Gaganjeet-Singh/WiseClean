let schedule_btn = document.querySelectorAll(".schedule-btn");

for(btn of schedule_btn) {
    btn.addEventListener("click", function() {
    window.location.href = "book.html";
})
};