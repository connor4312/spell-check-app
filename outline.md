- js-debug
  - Open debug terminal to start the app, show what it does. Show you can also use the codelens in the package.json.
  - Quick demo of native notebooks via restbook
  - Show worker_thread debugging, breakpoints etc. in both
  - Show deminification by stepping edit-distance.js
  - Show performance tooling using the table
  - Additionally show the flame graph, and realtime performance view
  - Show the easy ways to get started in browser debugging--clicking link in the debug terminal, and "Debug: Open Link"
  - Quick proof that breakpoints in the browser work, and performance tools
  - Set up a launch config for Edge for re-use
- devtools
  - Intro:
    - My name is Brandon Goddard, and I work on the Microsoft Edge DevTools Team
    - I'm here to talk about the work we have been doing on the Microsoft Edge Devtools VSCOde extension and the integration with
      JavaScript debugger.
    - Connor demonstrated Javascript debugging and console functionality
    - We have been working on bringing some of the most commonly used Developer tools directly into VScode to give a more seamless
      experience for authoring and debugging webpages directly from your VSCOde editor
    - We Augment this with elements and network debugging
  - Inpect Button Integration
    - Configure launch.json for edge
    - Installation process
    - Show the new page, documentation, 
    - use the inspect button to attach devtools to the active target (pick up from where Connor leaves off)
    - Quick highlight of the styles/computed/eventlistener/A11y sidepanes
  - Example: Fix CSS Grid/flexbox issue
    - Talk about new Grid/Flexbox tooling
    - Example project: highlight Flex/grid tools, use to fix alignment on table
      - Use elements tool to select element, toggle on Grid
      - Use links in devtools style pane to open up source code
      - Show MDN documentation inline
      - Fix the issue
  - Use network tool to inspect one of the spellcheck loops
    - Throttle to show offline
    - turn back on afterward
  
  If time:
  - Use screencast to show page inside VSCode view instead of separate browser
  - Show documentation page
  - Launch arbitrary edge instances for debugging, switch between targets

