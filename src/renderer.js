const information = document.getElementById('info');
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;

information.append([`, 应用版本: v${versions.project()}`]);

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // 打印 'pong'

  window.alert(`response: ${response}`);
  // const message = document.createElement("p")
  // message.innerHTML = `<p>response: ${response}</p>`
  // information.appendChild(message)
};

func();
