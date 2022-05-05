import React from "react";
import Svg, {Path} from "react-native-svg";
import { StyleSheet } from "react-native";

const SvgHomeIcon = ({width = '36', height = '40', value, styleMix}) => {
    const mixedStyle = StyleSheet.compose({}, styleMix);
    return(
       
        <Svg version="1.1" id="Capa_1"  x="0px" y="0px"
	        viewBox="0 0 58.365 58.365" style="enable-background:new 0 0 58.365 58.365;">
            <Path d="M57.863,26.632l-8.681-8.061V5.365h-10v3.921L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414
	                c0.375,0.404,1.008,0.427,1.414,0.052l3.319-3.082v33.349h16h16h16V25.015l3.319,3.082c0.192,0.179,0.437,0.267,0.681,0.267
	                c0.269,0,0.536-0.107,0.732-0.319C58.291,27.641,58.267,27.008,57.863,26.632z M41.182,7.365h6v9.349l-6-5.571V7.365z
	                M23.182,56.365V35.302c0-0.517,0.42-0.937,0.937-0.937h10.126c0.517,0,0.937,0.42,0.937,0.937v21.063H23.182z M51.182,56.365h-14
	                V35.302c0-1.62-1.317-2.937-2.937-2.937H24.119c-1.62,0-2.937,1.317-2.937,2.937v21.063h-14V23.158l22-20.429l14.28,13.26
	                l5.72,5.311v0l2,1.857V56.365z" fill="#000"/>
        </Svg>
    );
};

export default SvgHomeIcon;