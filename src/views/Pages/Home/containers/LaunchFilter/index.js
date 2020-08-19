import LaunchFilter from "./LaunchFilter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLaunchSuccess, setLaunchYear, setLandSuccess } from "../../../../../state/ducks/launchFilter/actions";
import { selectLaunchYear, selectLandSuccess, selectLaunchSuccess } from "../../../../../state/ducks/launchFilter/selectors";

const mapDispatchToProps = dispatch => bindActionCreators({
    setLaunchSuccess, 
    setLaunchYear, 
    setLandSuccess
},dispatch)
const mapStateToProps = state => ({
    launchYear: selectLaunchYear(state),
    landSuccess: selectLandSuccess(state),
    launchSuccess: selectLaunchSuccess(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchFilter)