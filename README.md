# Task Manager Application

A simple, lightweight task management application with local storage persistence.

## Features

- ✅ Add tasks with titles
- ✅ Mark tasks as complete/undo
- ✅ Delete tasks with confirmation
- ✅ All data persists in browser localStorage
- ✅ Responsive design for mobile and desktop
- ✅ Modern, clean UI

## How to Use

### Opening the Application

1. **Open in Browser (Recommended)**
   - Double-click `index.html` in your file explorer
   - OR drag and drop `index.html` into any web browser
   - OR right-click `index.html` → Open with → Choose your browser

2. **Alternative: Live Server (For Development)**
   ```bash
   # If you have Python installed
   python -m http.server 8000
   # Then open http://localhost:8000 in your browser
   
   # Or with Node.js
   npx http-server
   # Then open http://localhost:8080 in your browser
   ```

### Using the Application

1. **Add Task**: Type a task title in the input field and click "Add Task" or press Enter
2. **Complete Task**: Click the "Complete" button to mark a task as done
3. **Undo Completion**: Click the "Undo" button to mark a task as incomplete
4. **Delete Task**: Click the "Delete" button and confirm to remove a task

## File Structure

```
task-manager/
├── index.html           # Main HTML structure
├── task-manager-app.js  # Application logic and functionality
├── styles.css           # Styling and responsive design
└── README.md           # This file
```

## Important Notes

⚠️ **DO NOT** run the HTML, JS, or CSS files in terminal/bash
✅ **DO** open index.html in a web browser

These files are meant to be opened in a web browser, not executed in the terminal.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Edge
- Safari
- Opera

## Data Persistence

All tasks are stored in your browser's localStorage. This means:
- Tasks persist between browser sessions
- Tasks are specific to each browser
- Clearing browser data will remove all tasks
- Data is stored locally on your device

