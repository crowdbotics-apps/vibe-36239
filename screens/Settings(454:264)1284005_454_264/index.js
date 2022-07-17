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
      <View style={styles.View_490_70}>
        <View style={styles.View_476_12} />
        <View style={styles.View_476_21}>
          <Text style={styles.Text_476_21}>Show me to</Text>
        </View>
        <View style={styles.View_476_22}>
          <Text style={styles.Text_476_22}>People i liked</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22a5464f-4fce-43cf-9726-6cd9442c7fc8"
          }}
          style={styles.TouchableOpacity_476_23}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("492_363"))
          }
        />
      </View>
      <View style={styles.View_490_71}>
        <View style={styles.View_476_27} />
        <View style={styles.View_476_28}>
          <Text style={styles.Text_476_28}>Autoplay videos</Text>
        </View>
        <View style={styles.View_476_29}>
          <Text style={styles.Text_476_29}>Wi-Fi/mobile data</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdc841f9-f16b-4c61-ac02-d65e9e322555"
          }}
          style={styles.TouchableOpacity_476_30}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("492_432"))
          }
        />
      </View>
      <View style={styles.View_490_72}>
        <View style={styles.View_476_34} />
        <View style={styles.View_476_35}>
          <Text style={styles.Text_476_35}>Push notification</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7f180ae-b962-4ae7-a59e-9d8d0a30b6b7"
          }}
          style={styles.TouchableOpacity_476_37}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("492_501"))
          }
        />
      </View>
      <View style={styles.View_490_73}>
        <TouchableOpacity
          style={styles.TouchableOpacity_454_265}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_379"))
          }
        >
          <View style={styles.View_454_266}>
            <View style={styles.View_454_267} />
            <View style={styles.View_454_268}>
              <View style={styles.View_454_269}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c0a7301-3683-4d7b-9198-650da20d0615"
                  }}
                  style={styles.ImageBackground_454_270}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_454_272}>
          <View style={styles.View_454_273}>
            <View style={styles.View_454_274}>
              <View style={styles.View_454_275} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02dd84ac-6cfc-4d42-901c-16f611c4ad5a"
                }}
                style={styles.ImageBackground_454_276}
              />
              <View style={styles.View_454_277} />
            </View>
            <View style={styles.View_454_278}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07693659-2934-4fc2-9b1a-93094dba4a0a"
                }}
                style={styles.ImageBackground_454_279}
              />
            </View>
            <View style={styles.View_454_283}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed6ced5f-680b-400b-b24e-f9a5965fc588"
                }}
                style={styles.ImageBackground_454_284}
              />
            </View>
          </View>
          <View style={styles.View_454_289}>
            <View style={styles.View_454_290}>
              <Text style={styles.Text_454_290}>9:27</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_476_43}>
          <Text style={styles.Text_476_43}>Settings</Text>
        </View>
        <View style={styles.View_502_17}>
          <TouchableOpacity
            style={styles.TouchableOpacity_502_10}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_322"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_476_42}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_379"))
            }
          >
            <Text style={styles.Text_476_42}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_490_67}>
        <View style={styles.View_476_2} />
        <View style={styles.View_476_9} />
        <View style={styles.View_476_3}>
          <Text style={styles.Text_476_3}>Phone number</Text>
        </View>
        <View style={styles.View_476_44} />
        <View style={styles.View_476_4}>
          <Text style={styles.Text_476_4}>491782881628</Text>
        </View>
      </View>
      <View style={styles.View_490_68}>
        <View style={styles.View_476_10} />
        <View style={styles.View_476_13}>
          <Text style={styles.Text_476_13}>Email</Text>
        </View>
        <View style={styles.View_476_45} />
        <View style={styles.View_476_14}>
          <Text style={styles.Text_476_14}>michael7.germany@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_490_69}>
        <View style={styles.View_476_11} />
        <View style={styles.View_476_19}>
          <Text style={styles.Text_476_19}>Location</Text>
        </View>
        <View style={styles.View_476_46} />
        <View style={styles.View_476_20}>
          <Text style={styles.Text_476_20}>Berlin,Germany</Text>
        </View>
      </View>
      <View style={styles.View_490_62}>
        <View style={styles.View_474_766}>
          <Text style={styles.Text_474_766}>Privacy preferences</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecc6e553-1d25-4dea-9bfe-746597fd2b77"
          }}
          style={styles.TouchableOpacity_474_767}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("492_273"))
          }
        />
        <View style={styles.View_474_765} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 248, 251, 1)" },
  View_2: { height: hp("111%") },
  View_490_70: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%")
  },
  View_476_12: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_476_21: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_22: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_476_23: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_490_71: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%")
  },
  View_476_27: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_476_28: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_29: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_476_30: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_490_72: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_476_34: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_476_35: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_476_37: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_490_73: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_454_265: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("6%")
  },
  View_454_266: {
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
  View_454_267: {
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
  View_454_268: {
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
  View_454_269: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_454_270: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_454_272: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_273: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_274: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_275: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_454_276: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_454_277: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_454_278: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_279: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_454_283: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_284: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_454_289: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_454_290: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_454_290: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_476_43: {
    width: wp("33%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "center"
  },
  Text_476_43: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.44999999999999996,
    textTransform: "none"
  },
  View_502_17: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("7%")
  },
  TouchableOpacity_502_10: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 248, 251, 1)"
  },
  TouchableOpacity_476_42: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_476_42: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_490_67: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_476_2: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_476_9: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_476_3: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_476_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_44: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("2%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_476_4: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_476_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_68: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  View_476_10: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_476_13: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_45: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_476_14: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_69: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_476_11: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_476_19: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_476_46: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    opacity: 0.41999998688697815
  },
  View_476_20: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_476_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_490_62: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%")
  },
  View_474_766: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_474_766: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_474_767: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_474_765: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
