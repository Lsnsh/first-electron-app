const setButton = document.getElementById('btn');
const titleInput = document.getElementById('title');
const sendTextPreview = document.getElementById('text');

setButton.addEventListener('click', () => {
  const title = titleInput.value;
  console.log(`click:send: ${title}`);
  sendTextPreview.innerText = title;
  window.electronAPI.setTitle(title);
});
