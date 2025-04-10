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

## The fix
Open the `.env.development` file and change the `VITE_REDRAW_AFTER_ALERT` from `false` to `true`. 
```env
VITE_REDRAW_AFTER_ALERT=true
```

The canvas and cursor position are aligned correctly. Note that if you change the timeout of the collapse to not be 0, in other words it has an animation delay, this fix will not work. All other ui's need to be drawn before the excalidraw canvas is rendered.
