// SPDX-License-Identifier: MIT
// The Battery's Last Text to Its Charger — entry program.
// Writes one line of plain text to /output/entry.txt.

const ENTRY = "Charge the human instead. He's drained.";

await Deno.mkdir("/output", { recursive: true });
await Deno.writeTextFile("/output/entry.txt", ENTRY);
console.log(ENTRY);
