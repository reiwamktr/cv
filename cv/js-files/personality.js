const hobbySelect = document.getElementById("hobbySelect");
const characterSelect = document.getElementById("characterSelect");

const hobbyOptions = [
	"",
  "読書 (Reading)",
  "音楽を聴くこと(Listening to music)",
  "映画を見ること(Watching movies)",
  "歌を歌うこと	(Singing)",
  "料理を作ること(Cooking)",
  "ジョギング (Jogging)",
  "サイクリング (Cycling)",
  "ガーデニング (Gardening)",
  "写真を撮ること(Photography)",
  "旅行 (Travelling)",
  "ハイキング (Hiking)",
  "フィットネス (Fitness)",
  "手芸 (Crafts)",
  "釣り(Fishing)",
  "ドローイング	(Drawing)",
  "ギターを弾く (Playing guitar)",
  "ダンス (Dancing)",
];

const characterOptions= [
	"",
	"やさしい (Kind)",
	"しんせつ (Gentle)",
	"あかるい (Bright )",
	"まじめ  (Earnest)",
	"せっきょくてき (Energistic)",
	"きちょうめん (Neat)",
	"れいぎただしい (Polite)",
	"がんばりや (Hardworking)",
	"ほがらか (Cheerful)",
	"しゃこうてき (Sociable)",
	"しんらいできる (Trustworthy)",
	"こうきしんおうせい (Curious)",
	"せきにんかんがつよい (Responsible)",
	"れいせい (Calm)",
	"しんけん	(Serious)",
]





let populateSections = (selectElement, selectOptionsArray)=>{
	selectOptionsArray.forEach((optionText) => {
		const option = document.createElement("option");
		option.value = optionText;
		option.textContent = optionText;
		selectElement.appendChild(option);
	});
}

populateSections(hobbySelect, hobbyOptions);
populateSections(characterSelect, characterOptions);

