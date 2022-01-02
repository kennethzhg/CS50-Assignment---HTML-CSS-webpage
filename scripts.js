// list of quotes using array method (also considering using object method so that I can put the matching English and Chinese quotes together, but might have implications towards the variables and functions)

var cQE = [
    "When I walk along with two others, they may serve me as my teachers. I will select their good qualities and follow them, their bad qualities and avoid them.",
    "Is it not pleasant to learn with a constant perseverance and application? Is it not delightful to have friends coming from distant quarters? Is he not a man of complete virtue, who feels no discomposure though men may take no note of him?",
    "I will not be afflicted at men's not knowing me; I will be afflicted that I do not know men.",
    "When we see men of worth, we should think of equaling them; when we see men of a contrary character, we should turn inwards and examine ourselves.",
    "Virtue is not left to stand alone. He who practices it will have neighbours.",
    "They who know the truth are not equal to those who love it, and they who love it are not equal to those who delight in it.",
    "The wise find pleasure in water; the virtuous find pleasure in hills. The wise are active; the virtuous are tranquil. The wise are joyful; the virtuous are long-lived.",
    "He who exercises government by means of his virtue may be compared to the north polar star, which keeps its place and all the stars turn towards it.",
    "In teaching, there should be no distinction of classes.",
    "What you do not wish for yourself, do not do to others.",
];

var cQC = [
    "三人行，必有我師焉。擇其善者而從之，其不善者而改之。",
    "學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？人不知而不慍，不亦君子乎？",
    "不患人之不己知，患不知人也。",
    "見賢思齊焉，見不賢而內自省也。",
    "德不孤，必有鄰。",
    "知之者不如好之者，好之者不如樂之者。", 
    "知者樂水，仁者樂山。知者動，仁者靜。知者樂，仁者壽。", 
    "為政以德，譬如北辰，居其所而眾星共之。",
    "有教無類。",
    "己所不欲，勿施於人。"
];

var mQE = [
    "The poor attended to their own virtue in solitude; if advanced to dignity they made the whole empire virtuous as well.",
    "The benevolent are invincible.",
    "Either calamity or bliss comes merely at one's own choice.",
    "All men have the heart of mercy.",
    "A just cause enjoys abundant support while an unjust cause finds little help.",
    "The favorable opportunity does not help as much as the favorable terrain; the favorable terrain does not help as much as the group morale.",
    "Do not try to confine the people with closed borders; do not try to defend the state with deep mountain valleys; do not try to display force with sharp weapons.",
    "No riches or honors may induce him to corrupt; no poverty or lowliness may cause him to waver; no might or force may compel him to submit. Such would be what we call a great man.",
    "A man must have humiliated himself before others will humiliate him.",
    "Try not to be ashamed of anything when facing either Heaven or men."
];

var mQC = [
    "窮則獨善其身， 達則兼善天下。 ",
    "仁者無敵。",
    "禍福無不自己求之者。",
    "人皆有不忍人之心。",
    "得道者多助，失道者寡助。",
    "天時不如地利，地利不如人和。",
    "域民不以封疆之界，固國不以山溪之險，威天下不以兵革之利。",
    "富貴不能淫，貧賤不能移，威武不能屈，此之謂大丈夫。",
    "夫人必自侮，然後人侮之。",
    "仰不愧于天，俯不怍於人。"
];

/*
Initially I wrote the code this way: 
  
    // Introduce randomisation to each array of quotes, and English and Chinese quotes are matching

    var randCQ = Math.floor(Math.random()*cQE.length);
    var randCQE = cQE[randCQ];
    var randCQC = cQC[randCQ];

    var randMQ = Math.floor(Math.random()*mQE.length);
    var randMQE = mQE[randMQ];
    var randMQC = mQC[randMQ];

    // Functions to show a random pair of quotes every time "HitMe!" button is clicked

    function showRandCQ() {
        document.getElementById("English1").innerHTML = randCQE;
        document.getElementById("Chinese1").innerHTML = randCQC;
    };
    
    function showRandMQ() {
        document.getElementById("English2").innerHTML = randMQE;
        document.getElementById("Chinese2").innerHTML = randMQC;
    };

    However, by declaring the variables globally, the "HitMe!" button can only work once, and user must refresh page to get a new random quote pair.
    I then learnt that they must be declared locally in the respective functions, because if declared globally, the code will generate one particular random number, and the functions do not include the generation of a new random number, hence quotes wouldn't change.
    Conversely, by declaring them locally within the function, a random number will be generated every time the "HitMe!" button is clicked.
*/

// Functions to show a random quote pair every time "HitMe!" button is clicked

function showRandCQ() {
    var randCQ = Math.floor(Math.random()*cQE.length);
    var randCQE = cQE[randCQ];
    var randCQC = cQC[randCQ];
    document.getElementById("English1").innerHTML = randCQE;
    document.getElementById("Chinese1").innerHTML = randCQC;
};
function showRandMQ() {
    var randMQ = Math.floor(Math.random()*mQE.length);
    var randMQE = mQE[randMQ];
    var randMQC = mQC[randMQ];
    document.getElementById("English2").innerHTML = randMQE;
    document.getElementById("Chinese2").innerHTML = randMQC;
};