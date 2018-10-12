import React from 'react';
import './LoadingIndicator.css';
import { cx } from 'emotion';

const LoadingIndicator = ({ className, showBackground = false }) => (
	<div className={cx(className, "loading-container", { 'bg-secondary': showBackground })}>
		<div className="loader"></div>
	</div>
)

export default LoadingIndicator;