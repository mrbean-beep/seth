const input = document.getElementById("input");
const textbox = document.getElementById("textbox");
async function chat(){
    const url = 'https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/v1/chat/completions';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'de7cf36fc5msh32cd926ce8d94d1p114f46jsnc0271cfa8833',
		'X-RapidAPI-Host': 'chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com'
	},
	body:JSON.stringify( { //add JSON.stringify
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'user',
				content: input.value //change here too
			}
		],
		temperature: 0.8,
		stream: false
    })
};
try {
	const response = await fetch(url, options);
	const result = await response.json(); //text to json
    textbox.value = result.choices[0].message.content;//add this to display chatbot's response
	console.log(result);
} catch (error) {
	console.error(error);
}
}