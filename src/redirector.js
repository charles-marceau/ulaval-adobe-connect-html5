// Redirect to the Adobe Connect HTML5 version.
chrome.webRequest.onBeforeRequest.addListener(redirectToHTML5Website,
    {
        urls: [
            "https://classevirtuelle.ulaval.ca/system/get-player?urlPath=*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);

function redirectToHTML5Website(details) {
    const roomId = extractRoomIdFromUrl(details.url);
    return { redirectUrl: getHtml5Url(roomId) };
}

function extractRoomIdFromUrl(urlString) {
    const url = new URL(urlString);
    const params = new URLSearchParams(url.search);
    return params.get("urlPath").replace(/\//g, "");
}

function getHtml5Url(roomId) {
    return `https://classevirtuelle.ulaval.ca/${roomId}/?proto=true`;
}