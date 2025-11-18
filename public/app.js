let schedule_btn = document.querySelectorAll(".schedule-btn");

for(btn of schedule_btn) {
    btn.addEventListener("click", function() {
    window.location.href = "book.html";
})
};

let today = new Date();

today.setDate(today.getDate()+1);

let nextDate = today.toISOString().split("T")[0];

document.getElementById("pickup-date").setAttribute("min",nextDate);