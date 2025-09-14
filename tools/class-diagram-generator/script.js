import { Tool } from '../../assets/js/Tool.js';

/**
 * Represents the Java Class Diagram Generator tool.
 * @extends Tool
 */
export class ClassDiagramGenerator extends Tool {
    /**
     * Initializes the ClassDiagramGenerator tool.
     */
    constructor() {
        super(
            "Class Diagram Generator",
            "Generate UML diagrams from Java code",
            "tools/class-diagram-generator/index.html"
        );
    }

    /**
     * Initializes the UI components and event listeners for this tool.
     */
    initialize() {
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const generator = new ClassDiagramGenerator();
    generator.initialize();
});