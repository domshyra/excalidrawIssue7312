import "@excalidraw/excalidraw/index.css";

import { Excalidraw } from "@excalidraw/excalidraw";

export default function ExcalidrawPage() {
	return (
		<>
			<div style={{ height: "95vh", width: "90vw" }} className="theme--dark">
				<Excalidraw />
			</div>
		</>
	);
}
