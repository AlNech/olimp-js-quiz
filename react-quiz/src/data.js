export let data = [
    {
        quiestion: "You are looking for",
        answer: {option:["Women's style","Men's style"], id: [5, 4],imgPath:["/img/woman.svg","/img/man.svg"] },
        bottomText: "I'd like to see both",
        flagSex: "",
    },
    {
        quiestion: "What type of glasses are you looking for?",
        answer: {option:["Eyeglasses","Sunglasses"],id: [210, 211], imgPathmale:["/img/male/Eyeglasses.svg","/img/male/Sunglasses.svg"],
            imgPathfemale:["/img/female/Eyeglasses.svg","/img/female/Sunglasses.svg"],imgPathboth:["",""],
        },
        bottomText: "I want to see both",
    },
    {
        quiestion: "Do you need vision correction?",
        answer:{option:["yes","no"], imgPathmale:["",""],
        imgPathfemale:["",""],imgPathboth:["",""],},
        bottomText: "Skip",
        flagAnswer: "yes",
        underQuiestion:"What do you need your glasses for?",
        underAnswer: {option:["Near Vision", "Distance Vision","Multifocal/Progressive"], id: [6, 6, 7]},
        underbottomText: "Skip",
    },
    /*
    {
        quiestion:"What’s your current frame size?",
        answer:{"Small":"42-48mm","Medium":"49-53mm","Large":"54-58mm"},
        flagAnswer:"",
        bottomText: "I don't know",
        underQuiestion:"How wide would you say your face is?",
        underAnswer:["Wider Than Average","Average","Narrower Than Average"],
        underbottomText: "I'm not sure",
    },
    {
        quiestion:"Would you like to protect your eyes from light emanating from screens?",
        answer:["yes","no"],
        flagAnswer: "yes",
        underQuiestion:"When you’re out and about, which shade of lenses do you prefer?",
        underAnswer: ["Dark Shade","Light Shade","Transitioning Shade"]
    },
    {
        quiestion:"Every face shape has a perfect fit. What’s yours?",
        answer:["I have a long face","I have a round face", "In between"],
        bottomText: "I don't know",
    },
    {
        quiestion:"How would you define your facial features?",
        answer:["Sharp","Rounded","In between"],
        bottomText: "I don't know",
    },
    {
        quiestion:"Which frame style are you looking for?",
        help:"You can pick more than one.",
        answer:[["Rectangle","Browline","Aviator","Geometric"],["Wayframe","Round","Oval","Oversized"],["Cat Eye","Rimless","Square","Wrap"]]
    },
    {
        quiestion:"Are you looking for any particular eyewear brands?",
        answer:["Yes, I have some in mind","No brand isn't important"]
    },
    {
        quiestion:"Choose your favorite brands",
        answer:[[],[],[]]
    }*/

]