import React,{Component} from "react"


class WrapComponent extends Component {


    render() {
        return (
            <>
                <div id="wrap">
                    <HeaderComponent/>
                    <MainComponent/>
                    <FooterComponent/>

                </div>
            </>
        )
    }
}
export default WrapComponent;