// DOMコンテンツが読み込まれた後に初期化
document.addEventListener("DOMContentLoaded", function() {
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
                link.textContent = '詳細を見る';
                break;
            case '北海道漁連':
                title.textContent = '北海道漁連';
                description.textContent = '北海道漁連のブース説明';
                image.src = 'images/sample3.jpg';
                link.href = 'https://www.gyoren.or.jp/';
                link.textContent = '詳細を見る';
                break;
            case '平田産業':
                title.textContent = '平田産業';
                description.textContent = '平田産業のブース説明';
                image.src = 'images/sample4.jpg';
                link.href = 'https://hiratasangyo.com/';
                link.textContent = '詳細を見る';
                break;
            case 'グリンリーフ':
                title.textContent = 'グリンリーフ';
                description.textContent = 'グリンリーフのブース説明';
                image.src = 'images/sample5.jpg';
                link.href = 'https://www.akn.jp/';
                link.textContent = '詳細を見る';
                break;
            case '河村屋':
                title.textContent = '河村屋';
                description.textContent = '河村屋のブース説明';
                image.src = 'images/sample6.jpg';
                link.href = 'https://www.kawamuraya.co.jp/';
                link.textContent = '詳細を見る';
                break;
            case 'ゴミ分別ブース':
                title.textContent = 'ゴミ分別ブース';
                description.textContent = 'ゴミ分別ブースのブース説明';
                image.src = 'images/sample7.jpg';
                link.href = 'https://www.palsystem-gunma.coop/';
                link.textContent = '詳細を見る';
                break;
            case 'ステージ':
                title.textContent = 'ステージ';
                description.textContent = 'ステージのブース説明';
                image.src = 'images/sample8.jpg';
                link.href = 'https://www.palsystem-gunma2.coop/';
                link.textContent = '詳細を見る';
                break;   
            default:
                title.textContent = boothName;
                description.textContent = '詳細情報がありません。';
                image.src = 'images/default.jpg';
                link.href = '#';
                link.textContent = '詳細を見る';
                break;
        }

        popup.style.display = 'block'; // ポップアップを表示
    }

    // ポップアップを閉じる関数
    function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    }

    // ポップアップの閉じるボタンにイベントリスナーを追加
    document.getElementById('popup-close').addEventListener('click', closePopup);

    // SVG内の全てのクリック可能なエリアにイベントリスナーを追加
    function addEventListenersToSVGAreas() {
        const svg = document.getElementById('eventmap');
        const clickableAreas = svg.querySelectorAll('[data-booth]');

        clickableAreas.forEach(area => {
            area.addEventListener('click', function(event) {
                const boothName = area.getAttribute('data-booth');
                showPopup(event, boothName);
            });

            // タッチサポートを追加
            area.addEventListener('touchstart', function(event) {
                const boothName = area.getAttribute('data-booth');
                showPopup(event, boothName);
            });
        });
    }

    addEventListenersToSVGAreas();

    // ウィンドウのリサイズ時にSVGのサイズを調整（必要に応じて）
    window.addEventListener('resize', function() {
        const svg = document.getElementById('eventmap');
        const containerWidth = svg.parentElement.clientWidth;
        svg.setAttribute('width', containerWidth);
        svg.setAttribute('height', containerWidth * (svg.viewBox.baseVal.height / svg.viewBox.baseVal.width));
    });
});
