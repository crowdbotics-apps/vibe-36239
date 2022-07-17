import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        style={styles.TouchableOpacity_401_43}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("404_210"))
        }
      >
        <View style={styles.View_401_44}>
          <View style={styles.View_401_45} />
          <View style={styles.View_401_46}>
            <View style={styles.View_401_47}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63e98e17-3a6b-4485-86de-f783b42e4793"
                }}
                style={styles.ImageBackground_401_48}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_401_11}>
        <Text style={styles.Text_401_11}>log in</Text>
      </View>
      <View style={styles.View_401_12}>
        <View style={styles.View_401_13} />
        <View style={styles.View_401_14}>
          <Text style={styles.Text_401_14}>Email/Phone number</Text>
        </View>
      </View>
      <View style={styles.View_401_15}>
        <View style={styles.View_401_16} />
        <View style={styles.View_401_17}>
          <Text style={styles.Text_401_17}>Password</Text>
        </View>
      </View>
      <View style={styles.View_484_151}>
        <TouchableOpacity
          style={styles.TouchableOpacity_454_38}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_77"))
          }
        />
        <View style={styles.View_404_258}>
          <Text style={styles.Text_404_258}>log in</Text>
        </View>
      </View>
      <View style={styles.View_404_229}>
        <View style={styles.View_484_152}>
          <View style={styles.View_404_251} />
          <View style={styles.View_404_259}>
            <Text style={styles.Text_404_259}>Continue with Google</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94402182-f04f-4ec9-9b08-0ece0272a863"
            }}
            style={styles.ImageBackground_478_53}
          />
        </View>
        <View style={styles.View_484_153}>
          <View style={styles.View_404_253} />
          <View style={styles.View_404_254}>
            <Text style={styles.Text_404_254}>Continue with facebook</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1dd56d4-e302-43e0-9088-7da17f55eefa"
            }}
            style={styles.ImageBackground_478_58}
          />
        </View>
        <View style={styles.View_484_154}>
          <View style={styles.View_404_260} />
          <View style={styles.View_404_261}>
            <Text style={styles.Text_404_261}>Continue with Phonenumber</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f0d2550-ad00-44fc-a0cf-32177941f3c6"
            }}
            style={styles.ImageBackground_478_61}
          />
        </View>
      </View>
      <View style={styles.View_404_236}>
        <Text style={styles.Text_404_236}>Or Continue With</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b5262ef-a084-462c-8472-fc746aeb1899"
        }}
        style={styles.ImageBackground_404_249}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5791081f-c821-462a-b786-4d06bb298dc3"
        }}
        style={styles.ImageBackground_404_250}
      />
      <View style={styles.View_502_5}>
        <View style={styles.View_502_4} />
        <View style={styles.View_405_418}>
          <Text style={styles.Text_405_418}>forgot Password?</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 248, 251, 1)" },
  View_2: { height: hp("111%") },
  TouchableOpacity_401_43: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%")
  },
  View_401_44: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_401_45: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_401_46: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_401_47: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_401_48: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_401_11: {
    width: wp("27%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_401_11: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_401_12: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_401_13: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_401_14: {
    width: wp("38%"),
    minWidth: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_401_14: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_401_15: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_401_16: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_401_17: {
    width: wp("18%"),
    minWidth: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_401_17: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_484_151: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_454_38: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)"
  },
  View_404_258: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_404_258: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_404_229: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("72%")
  },
  View_484_152: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_404_251: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)"
  },
  View_404_259: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_404_259: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_478_53: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_484_153: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_404_253: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)"
  },
  View_404_254: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_404_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_478_58: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_484_154: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_404_260: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)"
  },
  View_404_261: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_404_261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_478_61: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_404_236: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_404_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_404_249: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("65%")
  },
  ImageBackground_404_250: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("65%")
  },
  View_502_5: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("59%")
  },
  View_502_4: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 248, 251, 1)"
  },
  View_405_418: {
    width: wp("26%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_405_418: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16499999999999998,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
