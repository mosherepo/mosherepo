#!/bin/bash

# AI Data Solutions Website - Quick Start Script
# This script helps you launch the website locally

echo "================================================"
echo "  AI Data Solutions Website - Quick Start"
echo "================================================"
echo ""

# Check if Python is installed
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo ""
    echo "Starting local web server on http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    echo "================================================"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo ""
    echo "Starting local web server on http://localhost:8000"
    echo "Press Ctrl+C to stop the server"
    echo ""
    echo "================================================"
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found"
    echo ""
    echo "Please install Python or open index.html directly in your browser"
    echo ""
    echo "Alternatively, you can use Node.js:"
    echo "  npm install -g serve"
    echo "  serve . -p 8000"
fi