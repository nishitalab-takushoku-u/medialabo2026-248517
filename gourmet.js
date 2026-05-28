
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let n of data.results.shop){
    console.log(n.name);
    console.log("予算: " + n.budget.name);
    console.log("ジャンル: " + n.genre.name);
    console.log("サブジャンル: " + n.sub_genre.name);
    console.log("住所: " + n.address);
    console.log("キャッチコピー: " + n.catch);
    console.log("営業時間: " + n.open);
    console.log("アクセス: " + n.access);
    }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let remove =document.querySelector('#result');
    if(remove){
      remove.remove();
    }
    let result = document.createElement('div');
    result.setAttribute('id', 'result');
    document.body.insertAdjacentElement('beforeend', result);

    let h2 = document.createElement('h2');
    h2.textContent = '検索結果 ' + data.results.results_returned + '件';;
    result.insertAdjacentElement('beforeend', h2);

    for(let n of data.results.shop){
      let shop = document.createElement('div');
      shop.setAttribute('class', 'shop');

      let shopTop = document.createElement('div');
      shopTop.setAttribute('class', 'shop-top');

      let h3 = document.createElement('h3');
      h3.textContent = n.name;

      let yosan = document.createElement('p');
      yosan.setAttribute('class', 'yosan');
      yosan.textContent = '予算: ' + n.budget.name + '/ジャンル: ' + n.genre.name;

      shopTop.insertAdjacentElement('beforeend', h3);
      shopTop.insertAdjacentElement('beforeend', yosan);


      let shopBottom = document.createElement('div');
      shopBottom.setAttribute('class', 'shop-bottom');

      let p1 = document.createElement('p');
      if(n.sub_genre){
        p1.textContent = 'サブジャンル: ' + n.sub_genre.name;
      }
      else{
        p1.textContent = 'サブジャンル: なし';
      }
      let p2 = document.createElement('p');
      p2.textContent = '住所: ' + n.address;

      let p3 = document.createElement('p');
      p3.textContent = 'キャッチコピー: ' + n.catch;

      let p4 = document.createElement('p');
      p4.textContent = '営業時間: ' + n.open;

      let p5 = document.createElement('p');
      p5.textContent = 'アクセス: ' + n.access;

      shopBottom.insertAdjacentElement('beforeend', p1);
      shopBottom.insertAdjacentElement('beforeend', p2);
      shopBottom.insertAdjacentElement('beforeend', p3);
      shopBottom.insertAdjacentElement('beforeend', p4);
      shopBottom.insertAdjacentElement('beforeend', p5);

      shop.insertAdjacentElement('beforeend', shopTop);
      shop.insertAdjacentElement('beforeend', shopBottom);
      result.insertAdjacentElement('beforeend', shop);
    }

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest'); 
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let genre = document.querySelector('#keyword').value;
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';

    axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if(typeof data === 'string'){
      data = JSON.parse(data);
    } 
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}