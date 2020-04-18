// $(function(){
//   //アイコンをクリック
//   $(".example").click(function() {
//     //クリックの処理
//     $(".exul").slideToggle(200);
//   });
//
//   //アラートボックスを非表示にする
//   $("#alertbox").hide();
//
//   //ボタンをクリック
//   $(".alert").click(function() {
//     $("#alertbox").fadeIn(300);
//   });
//
//   //okボタンをクリック
//   $("#ok").click(function() {
//     $("#alertbox").fadeOut(300);
//   });
//
//   //ボタンを押したらアラートでページ遷移を確認
//   $(".btn4").click(function() {
//     alert("ページを遷移しますか？");
//   });
//
//   //サムネをクリックしたら画像が変更される
//   $(".smallimage").click(function() {
//     //取得した情報をアラートで表示して確認
//     // alert( $(this).attr("href"));
//
//     //ここでhref属性の情報を取得
//     var info = $(this).attr("href");
//     //ここで値を置き換える
//     $(".fimg").attr("src", info);
//     return false;
//   });
//
//
//
//   /*ここからタブの機能*/
//   /*タブ1以外を非表示にする*/
//     $('#contents div[id != "tab1"]').hide();
//
//     //ここで選択されたクラスはliのクラス
//     $(".exli").click(function() {
//       /*一度すべててコンテンツを非表示にする*/
//       $("#contents div").hide();
//       //選択されたコンテンツを取得
//       var info = $(this).attr("href");
//       $(info).show();
//       //currentクラスを持つクラスからcurrentクラスをを削除
//       $(".current").removeClass("current");
//       //選択されたコンテンツにcurrentクラスを追加
//       $(this).addClass("current");
//
//       return false;
//     });
//
//     /*ここからドロップダウンメニュー*/
//     $("#navi").children("li").hover(function() {
//       $(this).children("ul").stop().slideToggle(100);
//     });

// });

//ここから本格的なJavascriptの実装
$(function() {
  //ページにたどり着いたらいきなりのフェードイン
  $(".box1-1").stop().fadeIn(2000);

  //ある程度仕手にスクロールしてから表示させ
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 400){
      $(".box3-1-h1").stop().animate({opacity: "1"}, 500);
      $(".box3-1-p").stop().animate({opacity: "1"}, 500);
      $(".box3-2-h1").stop().animate({opacity: "1"}, 500);
      $(".box3-2-p").stop().animate({opacity: "1"}, 500);
    }
    if(scroll >= 700) {
      $("#navtop").stop().animate({opacity : '0.5'}, 150);
      $(".box5-1-h1").stop().animate({opacity: "1"}, 500);
      $(".box5-1-p").stop().animate({opacity: "1"}, 500);
      $(".box5-2-h1").stop().animate({opacity: "1"}, 500);
      $(".box5-2-p").stop().animate({opacity: "1"}, 500);
      $(".box5-3-h1").stop().animate({opacity: "1"}, 500);
      $(".box5-3-p").stop().animate({opacity: "1"}, 500);
    }else{
      // $("navtop").stop().fadeOut(500);
      $("#navtop").stop().animate({opacity : '0'}, 150);
    }
  });
  //クリックしたらぬるっと動くやつ
  $("#navtop").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);

    return false;
  });
});


































// ここで終了
