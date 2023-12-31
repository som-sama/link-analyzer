const {crawlPage} = require('./crawler.js')

function main(){

    if (process.argv.length < 3){
        console.log("no website provided")
        process.exit(1)
    }
    if (process.argv.length > 3){
        console.log("too many command line args")
        process.exit(1)
    }

    const _baseURL = process.argv[2]

    for(const arg of process.argv){
        console.log(arg)
    }

    console.log(`starting crawl of ${_baseURL}`)


    crawlPage(_baseURL)


}
main()