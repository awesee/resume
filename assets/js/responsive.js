if (window.location.href.indexOf("mobile") == -1) {
    if (document.body.clientWidth < 640) {
        window.location.href = "/mobile/";
    }
} else {
    if (document.body.clientWidth > 640) {
        window.location.href = "/";
    }
}
