import { connect } from "react-redux";
import { fetchLaunches } from "../../../../../state/ducks/launchList/actions";
import { selectLaunchYear, selectLandSuccess, selectLaunchSuccess } from "../../../../../state/ducks/launchFilter/selectors";
import LaunchList from "./LaunchList";
import { selectLaunches } from "../../../../../state/ducks/launchList/selectors";

const mapDispatchToProps = {
    fetchLaunches,
}
const mapStateToProps = state => ({
    launchYear: selectLaunchYear(state),
    landSuccess: selectLandSuccess(state),
    launchSuccess: selectLaunchSuccess(state),
    launches: selectLaunches(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchList)