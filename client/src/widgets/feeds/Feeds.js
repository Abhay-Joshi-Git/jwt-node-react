import React from 'react';
import { getFeeds } from 'services/feeds';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator';

const Feeds = ({ feeds }) => (
	<div className="h-100">
		{feeds && feeds.length ? (
			<ListGroup>
				{feeds.map(feed => (
					<ListGroupItem key={feed.id}>
						<ListGroupItemHeading>{feed.id}</ListGroupItemHeading>
						<div>Description - {feed.description}</div>
						<div>Author - {feed.author}</div>
					</ListGroupItem>
				))}
			</ListGroup>
		) : <div>No data</div>}
	</div>
);

class FeedsContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loadingData: false,
			feeds: null
		}
	}

	async componentDidMount() {
		this.setState({ loadingData: true })
		try {
			const feeds = await getFeeds()
			this.setState({ feeds })	
		} finally {
			this.setState({ loadingData: false })
		}
	}

	render() {
		return (
			<div style={{ minHeight: 300, position: 'relative' }}>
				<h3>Feeds</h3>
				{this.state.loadingData
					? <LoadingIndicator className="loading-container" />
					: <Feeds feeds={this.state.feeds} />
				}
			</div>
		)
	}
}

export default FeedsContainer;