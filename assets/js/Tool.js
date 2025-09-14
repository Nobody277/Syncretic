/**
 * Represents the base class for all tools in the Syncretic collection.
 * This class is not meant to be instantiated directly.
 * @abstract
 */
/**
 * Export the base Tool as an ES module so other scripts can import it.
 * This comment is intentionally JSDoc-style to remain consistent with
 * the project's JSDoc-only comment policy.
 */
export class Tool {
    /**
     * @param {string} name The official name of the tool.
     * @param {string} description A brief description of what the tool does.
     * @param {string} url The relative URL to the tool's main HTML file.
     */
    constructor(name, description, url) {
        if (this.constructor === Tool) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.name = name;
        this.description = description;
        this.url = url;
    }

    /**
     * A placeholder method to be implemented by subclasses.
     * This could be used to initialize the tool's specific logic.
     * @abstract
     */
    initialize() {
        throw new Error("Method 'initialize()' must be implemented.");
    }
}
