class Software {
    constructor(name) {
        this.name = name
    }

    run() {
        console.log(`${this.name} is running`)
    }
}

class Plugin {
    constructor(name) {
        this.name = name
    }

    activate() {
        console.log(`${this.name} plugin is activated`)
    }
}

class Browser extends Software {
    constructor(name) {
        super(name)
        this.plugins = []
    }

    install(plugin) {
        this.plugins.push(plugin)
    }

    runPlugins() {
        this.plugins.forEach(p => p.activate())
    }
}

// Test
const chrome = new Browser('Chrome')
const adblock = new Plugin('AdBlock')
const darkmode = new Plugin('DarkMode')

chrome.install(adblock)
chrome.install(darkmode)

chrome.run()          // Chrome is running
chrome.runPlugins()   // AdBlock plugin is activated
                      // DarkMode plugin is activated
