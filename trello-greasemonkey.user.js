// ==UserScript==
// @name        trello-emilien-puget
// @namespace   trello-emilien-puget
// @include     https://trello.com/*
// @include     https://*.trello.com/*
// @version     1
// @grant       none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @oujs:author emilien-puget
// ==/UserScript==
var showIdCard = function () {
    $('.card-short-id').removeClass('hide').css('padding', '5px');
};
$(function () {

    $('.list-card').bind('mouseout', function () {
        showIdCard();
    });

    $('#content').bind('mousewheel DOMMouseScroll', function (event) {
        if ($(event.target).parents('.list').length == 0) {
            var $board = $('#board');
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                var next = $board.scrollLeft() - 280;
                if ($board.scrollLeft() % 280 != 0) {
                    next = Math.round($board.scrollLeft() / 280) * 280;
                }
                $board.scrollLeft(next);
            }
            else {
                $board.scrollLeft($board.scrollLeft() + 280);
            }
        }
    });
    showIdCard();
});
