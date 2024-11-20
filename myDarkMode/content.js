chrome.storage.local.get('darkMode', ({darkmode}) => {
    if(darkMode){
        document.documentElement.style.backgroundColor = "#121212";
        document.documentElement.style.color = "#e0e0e0";
    }else{
        document.documentElement.style.backgroundColor = "";
        document.documentElement.style.color = "";
    }
});