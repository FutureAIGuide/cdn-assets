/**
 * Example JavaScript File
 * This is a sample script to demonstrate CDN usage
 * Version: 1.0.0
 */

(function() {
  'use strict';

  /**
   * Example utility function
   * @param {string} message - Message to log
   */
  function logMessage(message) {
    console.log('[CDN Asset Example]:', message);
  }

  /**
   * Initialize example functionality
   */
  function init() {
    logMessage('Example script loaded successfully!');
    
    // Example: Add event listeners
    document.addEventListener('DOMContentLoaded', function() {
      logMessage('DOM fully loaded');
    });
  }

  // Auto-initialize
  init();

  // Expose API if needed
  window.CDNExample = {
    logMessage: logMessage
  };
})();
