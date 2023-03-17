// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    const {match} = props
    const {params} = match
    const {id} = params
    this.state = {teamData: [], isLoading: true, id: `${id}`}
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {id} = this.state
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading, id} = this.state
    console.log(id)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    return (
      <div className={id}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="latest-match">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-image"
            />
            <h1 className="main-heading">Latest Matches</h1>
            <div>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul className="list-container">
              {recentMatches.map(eachItem => (
                <MatchCard match={eachItem} key={eachItem.Id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
