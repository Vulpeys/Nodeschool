module.exports = function checkUsersValid(goodUsers) {
	return function (someUser){
		return someUser.every (function (user) {
			return goodUsers.some(function (validUser) {
				return user.id === validUser.id;
			});
		});
	};
};
