const b = new Uint8Array(65536);
const n = Deno.stdin.readSync(b) ?? 0;
const L = new TextDecoder().decode(b.subarray(0, n)).split("\n");
let li = 0;
const readLine = () => L[li++];

// The userModule handles user data and nothing else
const userModule = {
  user: "",
  // TODO: store name on this.user and return "Welcome " + this.user
  login(name) {
    this.user = name;
    return `Welcome ${name}`;
  },
};

// The gameModule handles scoring and nothing else
const gameModule = {
  score: 0,
  // TODO: add points to this.score, then return "Score increased! Current score: " + this.score
  addPoints(points) {
    total = this.score += points;
    return `Score increased! Current score: ${total}`
  },
};

const username = readLine();
console.log(userModule.login(username));

const count = parseInt(readLine());
let lastMessage = "";
for (let i = 0; i < count; i++) {
  const points = parseInt(readLine());
  lastMessage = gameModule.addPoints(points);
}
console.log(lastMessage);