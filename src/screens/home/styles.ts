import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";



const styles = StyleSheet.create({
    headerText:{
        fontSize:24,
        color:"#000000",
        fontWeight:"600",
    },
    card: {
    width: s(60),
    height: vs(55),
    borderRadius: s(7),
    backgroundColor: '#D8D3D380',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles;