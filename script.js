document.addEventListener("DOMContentLoaded", function() {
    const toast = document.createElement("div");
    toast.textContent = "Welcome to Inuraceuticals!";
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#5A0A75";
    toast.style.color = "white";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "5px";
    toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
});
