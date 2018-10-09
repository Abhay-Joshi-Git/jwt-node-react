import React from 'react';
import './LoadingIndicator.css';
import { cx } from 'emotion';

const LoadingIndicator = ({ className }) => (
	<div className={cx(className, "loading-container")}>
		<div className="loader"></div>
	</div>
)

export default LoadingIndicator;