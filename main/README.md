# excalidraw issue 7312

to run the project 
```bash
cd main
npm i 
npm run dev
```

if using vscode just use the Debug "Web" task after doing an npm install in the main dir. It will ask you to Debug Anyway, just click on that.


## The issue 
When you run the project and click on the "Alert" will draw, then offset the canvas cursor position. 

## The attempted fix
Open the `.env.development` file and change the `VITE_REDRAW_AFTER_ALERT` from `false` to `true`. 
```env
VITE_REDRAW_AFTER_ALERT=true
```

This change should only draw the excalidraw component when the alert is closed, however, it does not fix the issue.

## The expected behavior
The expected behavior is that the alert should not affect the cursor position of the excalidraw component.

## The actual behavior
The actual behavior is that the alert does affect the cursor position of the excalidraw component.