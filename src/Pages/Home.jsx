import React from "react";

export default function HomePage() {
	return (
		<div>
			<img src={process.env.PUBLIC_URL + "/myphoto.png"} alt="myphoto" />
		</div>
	);
}
