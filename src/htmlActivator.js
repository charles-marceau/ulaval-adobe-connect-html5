// This code was extracted from Adobe Connect's loading page.
// It should automatically trigger the HTML5 meeting room without the need to click the button.
function triggerHtmlMeetingRoom() {
	var ua = navigator.userAgent.toLowerCase();
	var isSafari = ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1;
	var style = '';
	if (isSafari)
		style = 'display: block;border: none;height: 100%;width: 100%;';
	else
		style = 'display: block;border: none;height: 100vh;width: 100vw;';
	$(document).ready(function () {
		$("#troubleshooting-how-to").hide();
		$("#troubleshooting-link").hide();
		$("#meetingPagesGuideDiv").hide();
		$('<iframe />', {
			name: 'html-meeting-view-frame',
			id: 'html-meeting-frame',
			title: 'html-meeting',
			role: 'application',
			src: '/common/meetinghtml/index.html',
			style: style,
			allowfullscreen: true,
			webkitallowfullscreen: true,
			mozallowfullscreen: true
		}).appendTo('body');
	});
}

triggerHtmlMeetingRoom();