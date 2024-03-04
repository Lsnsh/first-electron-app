const information = document.getElementById('info');
information.innerText = `This application is currently in use Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

information.append([`, Application (v${versions.application() || '???'})`]);

const sendAndDisplayMessage = async () => {
  const response = await window.versions.ping();
  console.log(response); // 打印 'pong'

  const message = document.createElement('p');
  message.innerHTML = `<p>Invoke ping response: ${response}</p>`;
  information.appendChild(message);
};

sendAndDisplayMessage();

// demo list
const ipcBtn = document.getElementById('ipc-btn');
ipcBtn.addEventListener('click', () => {
  window.electronAPI.showIPCDemo('Hello IPC');
});
