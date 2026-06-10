export default defineWebSocketHandler({
  open(peer) {
    console.log(`open`)
  },
  message(peer, message) {
    console.log(`message`, message.text())
    console.log(`message2`, message)
    peer.send(`我是服务器，我收到了你的消息：${message.text()}`)
    setInterval(() => {
      peer.send(`我是服务器，我每隔5秒钟给你发送一次消息：${new Date().toLocaleTimeString()}`)
    }, 1000)
  },
  close(peer) {
    console.log(`close`)
  },
  error(peer, error) {
    console.log(`error`, error)
  }
})
