function onTabChanged(tabUrl) {
    if (!tabUrl.startsWith("./pages")) {
        return;
    }

    $("#content").load(tabUrl);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("tab", tabUrl.replace(".html", ""));
    window.history.pushState({}, "", `?${searchParams.toString()}`);
}

// Load home when site starts
window.addEventListener('load', () => {
    const searchParams = new URLSearchParams(window.location.search);
    const tab = searchParams.get("tab");
    if (tab) {
        onTabChanged(`${tab}.html`);
    }
    else {
        onTabChanged("./pages/home.html");
    }
});
