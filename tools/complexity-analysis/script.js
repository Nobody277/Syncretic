import { Tool } from '../../assets/js/Tool.js';

/**
 * Represents the Complexity Analysis tool.
 * @extends Tool
 */
export class ComplexityAnalysis extends Tool {
    /**
     * Initializes the ComplexityAnalysis tool.
     */
    constructor() {
        super(
            "Complexity Analysis",
            "Analyze Java code and return time and space complexity",
            "tools/complexity-analysis/index.html"
        );
    }

    /**
     * Initializes the UI components and event listeners for this tool.
     */
    initialize() {
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const analyzer = new ComplexityAnalysis();
    analyzer.initialize();
});
