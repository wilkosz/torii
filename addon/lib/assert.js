export default function assert(message, test) {
  if (!test) {
    console.error(message); // jshint ignore:line
  }
}
