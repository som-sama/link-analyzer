const {JSDOM} = require('jsdom')


function getURLsFromHTML(htmlBody, _baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')

    for (const linkElement of linkElements){
        if (linkElement.href.slice(0,1) == '/'){
            // its relative
            try{
                const urlObj = new URL(`${_baseURL}${linkElement.href}`)
                urls.push(normalizeURL(urlObj.href));
            } catch(err){
                console.log(`err w relative url: ${err.message}`)
            }
          
        } else {
            // its absolute
            try{
                const urlObj = new URL(linkElement.href)
                urls.push(normalizeURL(urlObj.href));
            } catch(err){
                console.log(`err w relative url: ${err.message}`)
            }
        }
    
    }
    return urls
}



function normalizeURL(urlString){
    const urlObj = new URL(urlString)
    const hostPath =  `${urlObj.hostname}${urlObj.pathname}`

    if(hostPath.length>0 && hostPath.slice(-1) == '/'){
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}