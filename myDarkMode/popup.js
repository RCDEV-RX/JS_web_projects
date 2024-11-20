window.document.getElementById('toggle').addEventListener('change', (event)=>{
    const isChecked = event.target.checked;
    chrome.storage.local.set({darkMode: isChecked});

    chrome.tabs.query({active:true, currentWindow:true},(tabs)=>{
        chrome.tabs.reload(tabs[0].id);
    });
});


chrome.storage.local.get('darkMode', ({darkMode}) => {
    document.getElementById('toggle').checked = darkMode;
});