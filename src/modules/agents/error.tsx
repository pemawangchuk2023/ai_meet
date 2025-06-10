"use client";

import ErrorState from "@/components/error-state";
import React from "react";

const ErrorPage = () => {
	return (
		<div>
			<ErrorState
				title='Error Loading State'
				description='Something went wrong'
			/>
		</div>
	);
};

export default ErrorPage;
