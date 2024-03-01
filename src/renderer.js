const information = document.getElementById('info');
information.innerText = `This application is currently in use Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

information.append([`, Application (v${versions.application() || '???'})`]);

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // 打印 'pong'

  window.alert(`invoke ping response: ${response}`);

  // const message = document.createElement("p")
  // message.innerHTML = `<p>response: ${response}</p>`
  // information.appendChild(message)
};

func();
