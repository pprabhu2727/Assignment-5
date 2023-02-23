function sendAlert () {
  alert('Hello, world!')
}

function makeBig () {
  // 2em is equivalent to 24pt font
  const t = document.getElementById('txtArea')
  t.style.fontSize = '2em'
}

function makeFancy () {
  const t = document.getElementById('txtArea')
  t.style.fontWeight = 'bold'
  t.style.color = 'blue'
  t.style.textDecoration = 'underline'
}

function makeBoring () {
  const t = document.getElementById('txtArea')
  t.style.fontWeight = 'normal'
  t.style.color = 'black'
  t.style.textDecoration = 'none'
}

function doMoo () {
  const t = document.getElementById('txtArea')
  t.style.textTransform = 'uppercase'
  const sentenceArray = t.value.split('.')
  for (let i = 0; i < sentenceArray.length - 1; i++) {
    sentenceArray[i] = sentenceArray[i] + '-Moo'
  }
  t.value = sentenceArray.join('.')
}
