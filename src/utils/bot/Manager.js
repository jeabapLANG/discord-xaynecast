const fs = require("fs"); //Import filesystem

/**
 * Class representing a manager
 */
class Manager {
    /**
     * Construct the manager class instance with the given directory and class item
     * @param {string} directory Directory to load the items from
     * @param {Object} itemClass Class used to load the items
     */
    constructor(directory, itemClass) {
        this._directory = directory; //Set the manager directory
        this._itemClass = itemClass; //Set the manager item class
        this._items = {}; //Set the manager items
    }

    /**
     * Set a given item in the manager
     * @param {string} name 
     * @param {Object} item 
     */
    set(name, item) {
        this._items[name] = new this._itemClass(item);
    }

    get(name) {
        return this._items[name];
    }

    getLoaded() {
        return Object.keys(this._items);
    }

    getCount() {
        return this.getLoaded().length;
    }

    load(filename) {
        const name = filename.slice(0, -3);
        const item = require(`../../${this._directory}/${name}`);

        this.set(name, item);
    }

    loadAll() {
        const files = fs.readdirSync(this._directory);

        for(const filename of files) {
            this.load(filename);
        }
    }

    unload(name) {
        if(this._items.hasKey(name)) {
            let name = require.resolve(name);

            delete require.cache[name];
            delete this._items[name];
        }
    }
    unloadAll() {
        const names = this.getLoaded();

        for(const name of names) {
            this.unload(name);
        }
    }
}


/**
 * Export the necessary functions and classes
 */
module.exports = {
    Manager: Manager //Export the Manager class
};