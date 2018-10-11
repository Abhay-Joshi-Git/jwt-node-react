import React from 'react';
import { getFeeds } from 'services/feeds';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'

const Feeds = ({ feeds }) => (
	<div className="h-100">
		<h3>Feeds</h3>
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
			feeds: null
		}
	}

	async componentDidMount() {
		// console.log('feeds props', this.props, this.props.history);
		// this.props.history.push('/login')
		const feeds = await getFeeds()
		this.setState({ feeds })
	}

	render() {
		return (
			<div>
				<Feeds feeds={this.state.feeds} />
			</div>
		)
	}
	
}

export default FeedsContainer;