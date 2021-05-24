import React, { useEffect, useState } from "react";

export const UseStateExample = () => {
	const [name] = useState("Mary");

	// useEffect(() => {
	//   if (name !== '') {
	//
	//     localStorage.setItem('formData', name);
	//   }
	// } );

	const [surName] = useState("Poppins");

	useEffect(() => {
		document.title = `${name} ${surName}`;
	});
	//
	// setName("Hello")
	// setSurName("World")

	return <div />;
};
