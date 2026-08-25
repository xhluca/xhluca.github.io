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

const demo = document.querySelector("[data-demo]");
const replay = document.querySelector("[data-replay]");

replay?.addEventListener("click", () => {
  const body = demo?.querySelector(".demo-body");
  if (body) {
    body.replaceWith(body.cloneNode(true));
  }
});
