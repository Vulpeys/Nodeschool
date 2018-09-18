module.exports = (message, multipl = message.length) => {
    return message + '!'.repeat(multipl); 
};