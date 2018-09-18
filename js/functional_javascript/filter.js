module.exports = function getShortMessages(msgs) {
	return msgs.filter(function(msg) {
		return msg.message.length < 50;
	}).map(function(msg) {
		return msg.message;
	});
};

/*const oldList = ["une", "liste", "de", "mots"];

const newList = oldList.map(word => {
  console.log("un mot -> ", word);
  return word.toUpperCase();
});

console.log("oldList \n", oldList);
console.log("newList \n", newList);*/
