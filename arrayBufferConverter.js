export default class ArrayBufferConverter {
  static load() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }

      return buffer;
    })(data);
  }

  static toString() {
    const buffer = this.load();

    return String.fromCharCode.apply(null, new Uint16Array(buffer));
  }
}
