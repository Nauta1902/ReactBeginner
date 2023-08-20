import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  // getElementById idから各要素を取得(idは一位に)
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
// 未完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li生成
  const li = document.createElement("li");
  li.innerText = text;
  console.log(li);
  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了したTODOを作成

    // 完了したTODOのテキストを抽出
    const completeTarget = completeButton.parentNode;
    const doneli = completeTarget.firstChild;
    // テキストの中身を空に
    completeTarget.textContent = null;
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を未完了リストから削除
      deleteFromCompleteList(returnButton.parentNode);
      // テキスト出力
      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    completeTarget.appendChild(doneli);
    completeTarget.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(completeTarget);
    deleteFromIncompleteList(completeButton.parentNode);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
