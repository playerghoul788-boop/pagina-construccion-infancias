<script>
let escala = 1;
const img = document.getElementById("imagenZoom");

img.addEventListener("wheel", function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
        escala += 0.1; // acercar
    } else {
        escala -= 0.1; // alejar
    }

    if (escala < 1) escala = 1;
    if (escala > 5) escala = 5;

    img.style.transform = "scale(" + escala + ")";
});
</script>
