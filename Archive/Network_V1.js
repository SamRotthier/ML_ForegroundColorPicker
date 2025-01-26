const net = new brain.NeuralNetwork()

net.train([
    {
        input:[0,0],
        output:[0]
    },
    {
        input:[1,0],
        output:[1]
    },
    {
        input:[0,1],
        output:[1]
    },
    {
        input:[1,1],
        output:[0]
    }
])

const diagram = document.getElementById('diagram')
const testOutput = document.getElementById('output')
diagram.innerHTML = brain.utilities.toSVG(net)

//testOutput.innerHTML = "Guess for net.run([0,0]) = " + net.run([0,0]) //0.0581272691488266
testOutput.innerHTML = "Guess for net.run([1,0]) = " + net.run([1,0]) // 0.9339713454246521