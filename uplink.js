(() => {
  const shareBtn = document.getElementById("shareBtn");

  const DEFAULT_TITLE = "Uplink";
  const DEFAULT_TEXT =
    "Quick reference from my journal:\n" +
    "Book: ___\n" +
    "Page/Section: ___\n" +
    "What it was: ___\n" +
    "Notes: ___";

  async function openNativeShare() {
    const data = {
      title: DEFAULT_TITLE,
      text: DEFAULT_TEXT,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {}
    }

    await navigator.clipboard.writeText(DEFAULT_TEXT);
    alert("Template copied. Paste into Notes, Email, or Text.");
  }

  shareBtn?.addEventListener("click", openNativeShare);
})();
