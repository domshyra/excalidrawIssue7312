import "@excalidraw/excalidraw/index.css";

import { Alert, AlertTitle, Box, Collapse, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Excalidraw } from "@excalidraw/excalidraw";

export default function ExcalidrawPage() {
	const [online, setOnline] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOnline(true);
		}, 2000);
	}, []);

	// If you change the VITE_REDRAW_AFTER_ALERT to true, the alert will be redrawn after the alert is closed
	const renderExcalidraw = () => {
		if (import.meta.env.VITE_REDRAW_AFTER_ALERT === "true") {
			return !online ? loadingBox() : <Excalidraw />;
		}
		return <Excalidraw />;
	};

	return (
		<>
			{offlineAlert(online)}
			<div style={{ height: "95vh", width: "95vw" }}>{renderExcalidraw()}</div>
		</>
	);
}
const offlineAlert = (online: boolean) => {
	return (
		<Box sx={{ width: "100%" }}>
			{/* NOTE - timeout must be 0 here or else the fix will not work */}
			<Collapse in={!online} timeout={0}>
				<Alert severity="error" variant="filled">
					<AlertTitle>Offline</AlertTitle>
					Please check your internet connection.
				</Alert>
			</Collapse>
		</Box>
	);
};

const loadingBox = () => {
	return (
		<Paper elevation={3} sx={{ height: "50%", width: "50%", alignSelf: "center", margin: "auto" }}>
			<Typography pt={5}>loading...</Typography>
		</Paper>
	);
};