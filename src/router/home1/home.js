import React, {
	Component
} from 'react'


import {
  connect
} from 'react-redux'
function mapStateToProps(state){
	return state
}
class Home extends Component{
	
	render(){
		return <h1>首页1</h1>
	}
}
const _Home = connect(mapStateToProps)(Home)
export default _Home