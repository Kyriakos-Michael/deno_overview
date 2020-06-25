// reading file
const decoder = new TextDecoder('utf-8')
const data = await Deno.readFile('readme.txt')
console.log(decoder.decode(data))

// write file
const encoder = new TextEncoder()
const text = encoder.encode('Hello new Ninjas')
await Deno.writeFile('readtme.txt', text)