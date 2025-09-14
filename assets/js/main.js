/**
 * Main application script for the Syncretic landing page.
 * Handles dynamic tool card generation and navigation.
 */

import { Tool } from './Tool.js';
/**
 * Updates the copyright date to the current date in MM/DD/YEAR format.
 */
function updateCopyrightDate() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const currentDate = `${month}/${day}/${year}`;
    
    const copyrightElement = document.querySelector('.main-footer p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentDate} Syncretic`;
    }
}

/**
 * Represents the Java Class Diagram Generator tool.
 * @extends Tool
 */
class ClassDiagramGenerator extends Tool {
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

/**
 * Represents the Complexity Analysis tool.
 * @extends Tool
 */
class ComplexityAnalysis extends Tool {
    /**
     * Initializes the ComplexityAnalysis tool.
     */
    constructor() {
        super(
            "Complexity Analysis",
            "Analyze Java code for time and space complexity",
            "tools/complexity-analysis/index.html"
        );
    }

    /**
     * Initializes the UI components and event listeners for this tool.
     */
    initialize() {
        
    }
}


/**
 * Application class to manage the main landing page functionality.
 */
class SyncreticApp {
    /**
     * Creates a new SyncreticApp instance.
     */
    constructor() {
        this.tools = [];
        this.toolsGrid = null;
    }

    /**
     * Initializes the application by setting up tools and rendering the UI.
     */
    initialize() {
        this.setupTools();
        this.toolsGrid = document.getElementById('toolsGrid');
        this.renderTools();
        updateCopyrightDate();
    }

    /**
     * Sets up the collection of available tools.
     */
    setupTools() {
        this.tools = [
            new ClassDiagramGenerator(),
            new ComplexityAnalysis()
        ];
    }

    /**
     * Renders all available tools as cards in the grid.
     */
    renderTools() {
        if (!this.toolsGrid) {
            console.error('Tools grid element not found');
            return;
        }

        this.toolsGrid.innerHTML = '';

        this.tools.forEach(tool => {
            const toolCard = this.createToolCard(tool);
            this.toolsGrid.appendChild(toolCard);
        });
    }

    /**
     * Creates a tool card element for the given tool.
     * @param {Tool} tool - The tool instance to create a card for.
     * @returns {HTMLElement} The created tool card element.
     */
    createToolCard(tool) {
        const card = document.createElement('a');
        card.href = tool.url;
        card.className = 'tool-card';
        
        card.innerHTML = `
            <h3>
                ${this.escapeHtml(tool.name)}
            </h3>
            <p>${this.escapeHtml(tool.description)}</p>
            <div class="tool-meta">
                <span>Click to open</span>
            </div>
        `;

        return card;
    }

    /**
     * Escapes HTML special characters to prevent XSS attacks.
     * @param {string} text - The text to escape.
     * @returns {string} The escaped text.
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new SyncreticApp();
    app.initialize();
});

export default SyncreticApp;