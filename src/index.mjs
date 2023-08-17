/**
 * const, let などの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// var変数の上書き
// val1 = "var変数はどう変わるか";
// console.log(val1);

// var 変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

let val2 = "let変数";
console.log(val2);

val2 = "let変数は上書き可能";
console.log(val2);

//let val2 = "let変数は再宣言不可";

// const の場合は上書きも再宣言も不可

// const val3 = [`dog`, `cat`];
// val3[0] = `maa`;
// val3.push(`cute`);
// console.log(val3);

/*
 * テンプレート文字列
 */
// const name = "nauta";
// const age = 26;
//私の名前はnautaです。年齢は26歳です。
// 従来の記法(長くてめんどい)
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// テンプレート文字列を用いた方法`を使用
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*
 * アロー巻数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// const func2 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// // アロー関数
// 変数名に = で値を入れているとデフォルト引数として扱える
// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(10, 20));

/*
 * 分割代入 配列でもオブジェクトでもいけるよ！
 */
// const myprofile = {
//   name: "nauta",
//   age: "26",
// };

// const message1 = `私の名前は${myprofile.name}です。年齢は${myprofile.age}です。`;
// console.log(message1);

// const [name, age] = myprofile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * スプレッド構文
 */
// 配列の展開
const arr1 = [1, 2];
//console.log(arr1);
//console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// console.log(...arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// 以下は参照渡しになる。コピーなら↑
// const arr8 = arr6;

/**
 * map や filter を使った配列の処理
 */

// const nameArr = ["田中", "山田", "Nauta"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// // 引数1つめは配列の要素、2つめはindex
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 == 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name == "Nauta") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
/**
 * 三項演算子
 */
// ある条件? 条件がtrueの時：条件がfalseの時
// c++ と同様
// const num = "1300";
// // toLocaleString は三桁区切りにしてくれる
// console.log(num.toLocaleString());
// const formattedNum = typeof num == 'number' ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);

/**
 * 論理演算しの本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }
// // || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
