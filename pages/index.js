document.addEventListener("DOMContentLoaded", function() {
    function resizeImageMap() {
        const image = document.getElementById('responsive-image');
        const map = document.querySelector('map[name="image-map"]');
        const areas = map.getElementsByTagName('area');
        const width = image.naturalWidth;
        const height = image.naturalHeight;

        if (width === 0 || height === 0) {
            // 画像がまだロードされていない場合
            image.addEventListener('load', resizeImageMap);
            return;
        }

        const scaleWidth = image.clientWidth / width;
        const scaleHeight = image.clientHeight / height;

        for (let i = 0; i < areas.length; i++) {
            const coords = areas[i].getAttribute('coords').split(',');
            for (let j = 0; j < coords.length; j++) {
                coords[j] = Math.round(coords[j] * (j % 2 === 0 ? scaleWidth : scaleHeight));
            }
            areas[i].setAttribute('coords', coords.join(','));
        }
    }

    window.addEventListener('resize', resizeImageMap);
    window.addEventListener('load', resizeImageMap);  // 画像がロードされたときに座標を調整
    resizeImageMap();  // 初期ロード時に座標を調整
});

// ポップアップを表示する関数
function showPopup(event, boothName) {
    event.preventDefault();  // デフォルトのイベントをキャンセル

    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');
    const image = document.getElementById('popup-image');
    const link = document.getElementById('popup-link');

    switch (boothName) {
        case 'エスケー石鹸':
            title.textContent = 'エスケー石鹸';
            description.textContent = 'エスケー石鹸のブース説明';
            image.src = 'images/sample1.jpg';
            link.href = 'https://www.sksoap.co.jp/';
            link.textContent = '詳細を見る';
            break;
        case '水宗園':
            title.textContent = '水宗園';
            description.textContent = '水宗園のブース説明';
            image.src = 'images/sample2.jpg';
            link.href = 'https://www.suisouen.co.jp/';
            break;
        case '北海道漁連':
            title.textContent = '北海道漁連';
            description.textContent = '北海道漁連のブース説明';
            image.src = 'images/sample3.jpg';
            link.href = 'https://www.gyoren.or.jp/';
            break;
        case '平田産業':
            title.textContent = '平田産業';
            description.textContent = '平田産業のブース説明';
            image.src = 'images/sample4.jpg';
            link.href = 'https://hiratasangyo.com/';
            break;
        case 'グリンリーフ':
            title.textContent = 'グリンリーフ';
            description.textContent = 'グリンリーフのブース説明';
            image.src = 'images/sample5.jpg';
            link.href = 'https://www.akn.jp/';
            break;
        case '河村屋':
            title.textContent = '河村屋';
            description.textContent = '河村屋のブース説明';
            image.src = 'images/sample6.jpg';
            link.href = 'https://www.kawamuraya.co.jp/';
            break;
        case 'ゴミ分別ブース':
            title.textContent = 'ゴミ分別ブース';
            description.textContent = 'ゴミ分別ブースのブース説明';
            image.src = 'images/sample7.jpg';
            link.href = 'https://www.palsystem-gunma.coop/';
            break;
        case 'ステージ':
            title.textContent = 'ステージ';
            description.textContent = 'ステージのブース説明';
            image.src = 'images/sample8.jpg';
            link.href = 'https://www.palsystem-gunma2.coop/';
            break;   
    }

    popup.style.display = 'block'; // ポップアップを表示
}

// タッチイベントのサポートを追加する関数
function addTouchSupport() {
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('touchstart', function(event) {
            showPopup(event, area.getAttribute('alt'));  // 'alt' 属性からブース名を取得
        });
    });
}

// ポップアップを閉じる動作
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('popup-close').addEventListener('click', closePopup);

// DOMが完全に読み込まれた後にタッチサポートを追加
document.addEventListener("DOMContentLoaded", addTouchSupport);
