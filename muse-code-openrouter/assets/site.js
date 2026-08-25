document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = "Copied";
      button.classList.add("copied");
      window.setTimeout(() => {
        button.textContent = "Copy";
        button.classList.remove("copied");
      }, 1600);
    } catch {
      window.getSelection()?.selectAllChildren(target);
    }
  });
});

const player = document.getElementById("demo-player");

if (player && window.AsciinemaPlayer) {
  player.textContent = "";
  window.AsciinemaPlayer.create("assets/demo.cast?v=4", player, {
    autoPlay: true,
    controls: true,
    fit: "width",
    loop: true,
    poster: "npt:0:00",
    speed: 1,
    terminalFontSize: "30px",
    theme: "dracula"
  });
}
