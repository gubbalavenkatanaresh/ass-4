// Write your code here
import './index.css'

const MatchCard = props => {
  const {match} = props
  const updatedMatch = {
    umpires: match.umpires,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
    id: match.id,
    date: match.date,
    venue: match.venue,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  }
  const {competingTeamLogo, competingTeam, result, matchStatus} = updatedMatch
  const status = matchStatus === 'Lost' ? 'red' : 'green'
  return (
    <li className="match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
