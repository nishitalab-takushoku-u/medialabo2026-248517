// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
p1 = document.querySelector('p#yosolog');
p2 = document.querySelector('p#result');
let seikai = false;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu++;

  let span = document.querySelector("p#kaisu");
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector("#yoso");
  let yoso = Number(i.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  p1.textContent = kaisu + '回目の予想: ' + yoso + '\n';
  if(seikai){
    p2.textContent = '答えは ' + kotae + ' でした。すでにゲームは終わっています';
  }else{
    if(yoso == kotae){
    p2.textContent = '正解です、おめでとう！';
    seikai = true;
  }else{
    if(kaisu < 3){
      if(kotae > yoso){
        p2.textContent = 'まちがい,答えはもっと大きいですよ';
      }else{
        p2.textContent = 'まちがい,答えはもっと小さいですよ';
      }
    }else if(kaisu == 3){
      p2.textContent ='まちがい,残念でした答えは ' + kotae + ' です。';
    }else{
      p2.textContent = '答えは ' + kotae + ' でした。すでにゲームは終わっています';
    }
  }
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b = document.querySelector('#suuji');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
