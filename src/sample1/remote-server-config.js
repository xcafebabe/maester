//Based on https://nodered.org/docs/creating-nodes/config-nodes
export default (RED) => {

  class RemoteServerNode {
    constructor(n) {
      RED.nodes.createNode(this, n)
      this.host = n.host
      this.port = n.port

      //Receiving messages
      this.on('input', msg => {
        // do something with 'msg'
      })

      //Sending messages
      // let msg = { payload:"hi" }
      // this.send(msg);

    }
  }
  RED.nodes.registerType('remote-server', RemoteServerNode)
}