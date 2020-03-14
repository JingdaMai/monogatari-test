"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
    "Help": {
        "Title": "Help",
        "Subtitle": "Some useful Links",
        "Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
    }
};

// Define the notifications used in the game
let notifications = {
    "Welcome": {
        title: "Welcome",
        body: "This is the Monogatari VN Engine",
        icon: ""
    }
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
    "classroom": "classroom.jpg"
};

// Define the Characters
const characters = {
    "m": {
        "Name": "Jingda",
        "Color": "#5bcaff"
    }
};

let script = {
    // The game starts here.
    "English": {
        "Start": [{
                "Input": {
                    "Text": "What is your name?",
                    "Validation": function(input) {
                        return input.trim().length > 0;
                    },
                    "Save": function(input) {
                        storage.player.Name = input;
                        return true;
                    },
                    "Warning": "You must enter a name!"
                }
            },
            "scene classroom with fadeIn",

            "m Hi {{player.Name}} Welcome to my first game!",

            {
                "Choice": {
                    "Dialog": "m Have you already read some documentation?",
                    "Yes": {
                        "Text": "Yes",
                        "Do": "jump Yes"
                    },
                    "No": {
                        "Text": "No",
                        "Do": "jump No"
                    }
                }
            },
            "end"
        ],

        "Yes": [

            "m That's awesome!",
            "m Then you are ready to go ahead and create an amazing Game!",
            "m I can't wait to see what story you'll tell!",
        ],

        "No": [

            "m You can do it now.",

            "display message Help",

            "m Go ahead and create an amazing Game!",
            "m I can't wait to see what story you'll tell!"
        ]
    },
    "简体中文": {
        "Start": [{
                "Input": {
                    "Text": "您的名字是?",
                    "Validation": function(input) {
                        return input.trim().length > 0;
                    },
                    "Save": function(input) {
                        storage.player.Name = input;
                        return true;
                    },
                    "Warning": "名字不能为空!"
                }
            },
            "scene classroom with fadeIn",
            "m 您好，{{player.Name}}欢迎来到我的测试游戏！",
            {
                "Choice": {
                    "Dialog": "m 您已经阅读过Monogatarid的文档？",
                    "Yes": {
                        "Text": "Yes",
                        "Do": "jump Yes"
                    },
                    "No": {
                        "Text": "No",
                        "Do": "jump No"
                    }
                }
            },
            "end"
        ],
        "Yes": [
            "m 棒极了！",
            "m 然后，你就可以继续前进，创造一个惊人的游戏！",
            "m 我迫不及待地想看到你会告诉什么故事！"
        ],
        "No": [
            "m 你可以现在就做。",
            "display message Help",
            "m 继续前进，创造一个惊人的游戏！",
            "m 我迫不及待地想看到你会告诉什么故事！"
        ]
    }
};