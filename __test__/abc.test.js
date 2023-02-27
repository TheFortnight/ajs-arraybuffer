import ArrayBufferConverter from '../arrayBufferConverter';

test('convert arrayBuffer to string', () => {
  const string = ArrayBufferConverter.toString();
  expect(string).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
