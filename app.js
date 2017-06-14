var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		/*insert bot username and oauth token obtained from: http://twitchapps.com/tmi/ */
		username: "Example",
		password: "oauth:asdf1234jkl;5678"
	},
	channels: ["RANDOMCHANNEL"] /*channel to post messages to*/
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
	/* will spam below message each time user enters a message* /
	/*client.action("randomchannelname", user['display-name'] + " you are very pretty.");*/

	/* if anybody in chat types !command the message "this is what I am saying" will appear */
	if(message === "!command"){
		client.action("randomchannellname", "this is what I am saying");
	}

});

/* will announce below message on initial login */
/*client.on('connected', function(address, port){
	client.action("Daniel40392", "Hello I'm SuparBot and here for a good time!");
}); */