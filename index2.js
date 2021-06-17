let quiz = [
  {
    question:"次の日本語の正しい英語訳はどれか。 竹馬",
    answers:[
      "ruminate",
      "dispersion",
      "stilts",
      "conclude",
      "retain"
    ],
    correct:"stilts"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 警句・金言・格言",
    answers:[
      "loquacious",
      "parasite",
      "imaginative",
      "aphorism",
      "clairvoyant"
    ],
    correct:"aphorism"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 苦境・窮地・苦しい立場・窮状・逼迫",
    answers:[
      "contradict",
      "retarded",
      "predicament",
      "insurgence",
      "remedy"
    ],
    correct:"predicament"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 主権・統治権・独立国・君主であること・支配権",
    answers:[
      "filial",
      "stratum",
      "soiree",
      "hauteur",
      "sovereignty"
    ],
    correct:"sovereignty"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 薄気味悪い・奇怪な・神秘的な・不自然なほどの・異常な・超人的な",
    answers:[
      "abandon",
      "subversive",
      "boost",
      "inspire",
      "uncanny"
    ],
    correct:"uncanny"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 本物の・権威ある・正真正銘の・真正の・真の・れっきとした",
    answers:[
      "elapse",
      "emancipate",
      "qualms",
      "authentic",
      "perjury"
    ],
    correct:"authentic"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 忘れられている状態・忘却",
    answers:[
      "prance",
      "stringent",
      "arterial",
      "oblivion",
      "dwindle"
    ],
    correct:"oblivion"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 眼科医（= ophthalmologist）",
    answers:[
      "oculist",
      "brazen",
      "virile",
      "ovation",
      "condescend"
    ],
    correct:"oculist"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 巨大な・巨像の（ような）・壮大な・とてつもない",
    answers:[
      "colossal",
      "retrospective",
      "jovial",
      "indigenous",
      "banal"
    ],
    correct:"colossal"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 催眠状態の・催眠術の・催眠の・睡眠薬・眠りを誘う",
    answers:[
      "extol",
      "harrowing",
      "fatuous",
      "hypnotic",
      "anonymous"
    ],
    correct:"hypnotic"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 周辺の・あまりじゅうようでない",
    answers:[
      "specific",
      "asinine",
      "appellation",
      "disparage",
      "peripheral"
    ],
    correct:"peripheral"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 不協和音・（物の）不調和・騒音・（人間関係が）融和を欠くこと・ （意見の）不一致・不和・ 仲たがい・ 争い・一致しない・ 不和である",
    answers:[
      "loose cannon",
      "curtailment",
      "discord",
      "overwhelming",
      "markup"
    ],
    correct:"discord"
  }, {
    question:"次の日本語の正しい英語訳はどれか。 誇大妄想狂・誇大妄想狂患者・誇大妄想者・誇大妄想狂の",
    answers:[
      "lurk",
      "megalomaniac",
      "placid",
      "composure",
      "hunker"
    ],
    correct:"megalomaniac"
  }
];


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length - 1;
let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

// 問題の順番をシャッフル
const shuffle = (quiz) => {
  for (let i = quiz.length -1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  return quiz
}
quiz = shuffle(quiz)

// 問題文・選択肢の書き換えをするコード
const setupQuiz = () =>{
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

// ボタンクリックで正誤判定
const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else{
    window.alert("不正解！");
  }
  quizIndex++;

  // クイズがまだあるかどうか
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert(`終了！あなたのスコアは${score}/${quizLength}です。`);
    restart();
  }
}
// 任意のボタンを押したときに関数clickHandler(正誤判定)の処理を行う。
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) =>{
    // クリックされていないボタン番号のとき、関数はスルーされる。
    clickHandler(e);
  });
  handlerIndex++;
}

// リスタートボタン
$button[buttonLength].textContent = "1問目からリスタート";
$button[buttonLength].addEventListener("click", () => {
  restart();
});
  // 1問目のクイズからリスタートおよびスコアのリセット
const restart = () => {
    quizIndex = 0;
    score = 0;
    setupQuiz();
};
