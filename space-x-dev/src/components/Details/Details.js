import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Main from '../Main';
import useLaunches from '../useLaunches/useLaunches';
import YouTube from 'react-youtube';

import './details.css';

const Details = ( props ) => {

	const history = useHistory();

	const [launch, setLaunch] = useState(null);

	const { getLaunch } = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch]);

	if (!launch) return <div>Загрузка...</div>;

	return (
		<div>
			<Main name={launch.name} />
			<main className="details">
				<div className="container">
					<div className="details-row">
						<div className="details-image">
							<img src={launch.links.patch.small} alt={launch.name}/>
						</div>
						<div className="details-content">
							<p className="details-description">{launch?.details}</p>
						</div>
					</div>
					<div>
					<YouTube className='details-youtube' videoId={launch.links.youtube_id}/>
					</div>
				</div>
				<a onClick={history.goBack} className="button button-back">go back</a>
			</main>
		</div>
	)
};

export default Details;
