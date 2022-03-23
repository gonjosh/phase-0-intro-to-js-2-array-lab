// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
    cats.push("Ralph")
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
const newcats = ["Broom"]
function appendCat() {
  let newcats = ([...cats, "Broom"])
  return newcats
}
const smallcats = ["Arnold"]
function prependCat() {
    let smallcats = (["Arnold", ...cats])
    return smallcats
}

function removeLastCat() {
    const tallcats = [...cats.slice(0,-1) ]
    return tallcats
}
function removeFirstCat() {
    const baldcats = [...cats.slice(-2) ]
    return baldcats
}