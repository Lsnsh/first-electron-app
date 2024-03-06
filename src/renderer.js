const information = document.getElementById('info');
information.innerText = `This application is currently in use Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

information.append([`, Application (v${versions.application() || '???'})`]);

const sendAndDisplayMessage = async () => {
  const messageList = document.createElement('ul');

  const response = await window.versions.ping();
  console.log(response); // 打印 'pong'
  const pingMessage = document.createElement('li');
  pingMessage.innerText = `Invoke ping response: ${response}`;

  const checkUpdateMessage = document.createElement('li');
  checkUpdateMessage.style.cursor = 'pointer';
  checkUpdateMessage.innerHTML = `<button>Click check update</button>`;
  checkUpdateMessage.addEventListener('click', async () => {
    const timestamp = await window.electronAPI.checkUpdate();
    console.log(timestamp); // print timestamp
    checkUpdateMessage.innerHTML = `<button>Click check update: ${new Date(
      timestamp
    ).toLocaleString()}</button>`;
  });

  messageList.appendChild(pingMessage);
  messageList.appendChild(checkUpdateMessage);
  information.appendChild(messageList);
};

sendAndDisplayMessage();

// demo list
const ipcBtn = document.getElementById('ipc-btn');
ipcBtn.addEventListener('click', () => {
  window.electronAPI.showIPCDemo('Hello IPC');
});
