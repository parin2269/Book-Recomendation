import React,{Component} from "react"
import {View,Text,TouchableOpactiy,Stylesheet,Button} from"react-native"

export default class Romance extends Component{
    render(){
        return(
            <View style={styles.recomendationview}>
                <Text style={styles.header}>Recomended Books</Text>
                <Button title="The Fault in Our Stars"onPress={()=>Linking.openURL("https://books-library.website/files/books-library.online-12292230Vr3R6.pdf")}></Button>
                <Button title="Red White and Royal Blue"onPress={()=>Linking.openURL("https://ettron.com/wp-content/uploads/2022/07/Red-White-And-Royal-Blue-pdf-free-download.pdf")}></Button>
                <TouchableOpactiy style={styles.backbutton}onPress={()=>this.props.navigation.navigate("HomeScreen")}>
                    <Text style={styles.backtext}>Back</Text>
                </TouchableOpactiy>
            </View>
        )
    }
}
const styles=Stylesheet.create({
    recomendationview:{
        flex:1
    },
    header:{
        fontSize:20,
        justifyContent:"center",
        textAlign:"center"
    },
    backbutton:{
        width:70,
        height:70,
        backgroundColor:"Blue",
        justifyContent:"center"
    },
    backtext:{
        textAlign:"center",
        color:"black"
    }

    
})