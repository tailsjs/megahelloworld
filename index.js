const text = "Hello World!"
const rusText = "Привет мир!"
async function helloworld(){
	text = `Hello world!`
	rusText = `Привет мир!`
	return {
    text,
	rusText
  };
}

module.exports = helloworld;