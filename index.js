// 問題文、選択肢、答え
// const question = "次の日本語の正しい英語訳はどれか。　　竹馬";
// const answers =[
//   "ruminate",
//   "dispersion",
//   "stilts",
//   "conclude",
//   "retain"
// ];
// const correct = "stilts";
// クイズを複数作成するための書き換え
  // quizの配列の中にオブジェクトとして、問題文、選択肢、答えをまとめる。
  // 2問目以降もquizの配列の中にオブジェクトとして書いていく。
const quiz = [
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
    question:"次の日本語の正しい英語訳はどれか。   主権・統治権・独立国・君主であること・支配権",
    answers:[
      "filial",
      "stratum",
      "soiree",
      "hauteur",
      "sovereignty"
    ],
    correct:"sovereignty"
  }
];

// 問題文の書き換え
// document.getElementById("js-question").textContent = question ;

// ボタンの書き換え
  // document.getElementsByTagName("button")[0].textContent = answers[0];
  // document.getElementsByTagName("button")[1].textContent = answers[1];
  // document.getElementsByTagName("button")[2].textContent = answers[2];
  // document.getElementsByTagName("button")[3].textContent = answers[3];
  // document.getElementsByTagName("button")[4].textContent = answers[4];
  // 上記のコードで何回も同じ記述が出てかつ長いので定数に代入
const $button = document.getElementsByTagName("button");
  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];
  // $button[4].textContent = answers[4];
  // 上記コードのリファクタリング
  // 問題文・ボタンの書き換えをまとめた。
const buttonLength = $button.length;
// const setupQuiz = () => {
//   document.getElementById("js-question").textContent = question ;
//   let buttonIndex = 0;
//   while(buttonIndex < buttonLength) {
//     $button[buttonIndex].textContent = answers[buttonIndex];
//     buttonIndex++;
//   }
// }
// setupQuiz();
// 複数問題の書き換えの対応
  // ボタンクリックするたびに問題文・選択肢の書き換えが起こるコード
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// ボタンクリック時の正誤判定
// $button[0].addEventListener("click", () =>{
//   if(correct === $button[0].textContent){
//     window.alert("正解！");
//   } else {
//     window.alert("不正解！");
//   }
// });
// $button[1].addEventListener("click", () =>{
//   if(correct === $button[1].textContent){
//     window.alert("正解！");
//   } else {
//     window.alert("不正解！");
//   }
// });
// $button[2].addEventListener("click", () =>{
//   if(correct === $button[2].textContent){
//     window.alert("正解！");
//   } else {
//     window.alert("不正解！");
//   }
// });
// $button[3].addEventListener("click", () =>{
//   if(correct === $button[3].textContent){
//     window.alert("正解！");
//   } else {
//     window.alert("不正解！");
//   }
// });
// $button[4].addEventListener("click", () =>{
//   if(correct === $button[4].textContent){
//     window.alert("正解！");
//   } else {
//     window.alert("不正解！");
//   }
// });
  //上記コードのリファクタリング
    // 正誤判定はクリック時に行う。ただし判定方法は配列のインデックス以外は同じ記述
    // 似た命令が5回出てきているためまとめたい。$button[]の数字を何とかしたい。
    // クリックしたときにそのボタンの番号が引数として入るようにして処理するコードが必要。
    // 以下リファクタリング第一段階。if文内の記述を引数eとe.targetを用いて書き換え
// $button[0].addEventListener("click", (e) => {
//   console.log(e);
//   if(correct === e.target.textContent) {
//     windowalert("正解！");
//   } else {
//     window.alert("不正解！");
//   }
// })
  // リファクタリング第二段階。if文else文は関数(引数eは重要)で囲って完了
    // 関数clickHandlerボタンをクリックしたときの正誤判定
    // クリックしたボタンのテキストがcorrectと同じなら正解、違えば不正解
    // 正解した場合、変数scoreが1足される。
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(`終了！あなたの正解数は${score}/${quizLength}です。`);
  }
};
    // クリック時に関数clickHandlerを呼び出すwhile文
    // while文でhandlerIndexの繰り返し処理を行うことで、クリックしたボタン配列で
    // 関数clickHandlerの呼び出しを行う。
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
