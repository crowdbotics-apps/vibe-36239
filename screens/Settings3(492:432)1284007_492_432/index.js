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
      <View style={styles.View_492_433}>
        <View style={styles.View_492_434} />
        <View style={styles.View_492_435}>
          <Text style={styles.Text_492_435}>Show me to</Text>
        </View>
        <View style={styles.View_492_436}>
          <Text style={styles.Text_492_436}>People i liked</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07304925-38a2-482f-a83b-02b8d2d933e1"
          }}
          style={styles.ImageBackground_492_437}
        />
      </View>
      <View style={styles.View_492_441}>
        <View style={styles.View_492_442} />
        <View style={styles.View_492_443}>
          <Text style={styles.Text_492_443}>Autoplay videos</Text>
        </View>
        <View style={styles.View_492_444}>
          <Text style={styles.Text_492_444}>Wi-Fi/mobile data</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d639918-46a9-4fe7-a996-a42c20cd88da"
          }}
          style={styles.TouchableOpacity_492_445}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("454_264"))
          }
        />
      </View>
      <View style={styles.View_492_449}>
        <View style={styles.View_492_450} />
        <View style={styles.View_492_451}>
          <Text style={styles.Text_492_451}>Push notification</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c23016c-4de1-441b-ad6d-b0a9f10f4d66"
          }}
          style={styles.ImageBackground_492_452}
        />
      </View>
      <View style={styles.View_492_457}>
        <TouchableOpacity
          style={styles.TouchableOpacity_492_458}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("404_379"))
          }
        >
          <View style={styles.View_492_459}>
            <View style={styles.View_492_460} />
            <View style={styles.View_492_461}>
              <View style={styles.View_492_462}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4da6bb51-d849-4e2e-9921-f975ee64a41c"
                  }}
                  style={styles.ImageBackground_492_463}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_492_465}>
          <View style={styles.View_492_466}>
            <View style={styles.View_492_467}>
              <View style={styles.View_492_468} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7231f7e9-8b4d-44d2-917a-ff3dc6e21c16"
                }}
                style={styles.ImageBackground_492_469}
              />
              <View style={styles.View_492_470} />
            </View>
            <View style={styles.View_492_471}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb89820b-3d71-47ef-9e04-8a700978bc21"
                }}
                style={styles.ImageBackground_492_472}
              />
            </View>
            <View style={styles.View_492_476}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01fd4175-c7d1-4316-a85e-27f922254f94"
                }}
                style={styles.ImageBackground_492_477}
              />
            </View>
          </View>
          <View style={styles.View_492_482}>
            <View style={styles.View_492_483}>
              <Text style={styles.Text_492_483}>9:27</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_492_484}>
          <Text style={styles.Text_492_484}>Settings</Text>
        </View>
        <View style={styles.View_502_21}>
          <TouchableOpacity
            style={styles.TouchableOpacity_502_13}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_379"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_492_456}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("404_379"))
            }
          >
            <Text style={styles.Text_492_456}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_492_485}>
        <View style={styles.View_492_486} />
        <View style={styles.View_492_487} />
        <View style={styles.View_492_488}>
          <Text style={styles.Text_492_488}>Phone number</Text>
        </View>
        <View style={styles.View_492_489} />
        <View style={styles.View_492_490}>
          <Text style={styles.Text_492_490}>491782881628</Text>
        </View>
      </View>
      <View style={styles.View_492_491}>
        <View style={styles.View_492_492} />
        <View style={styles.View_492_493}>
          <Text style={styles.Text_492_493}>Email</Text>
        </View>
        <View style={styles.View_492_494} />
        <View style={styles.View_492_495}>
          <Text style={styles.Text_492_495}>michael7.germany@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_492_496}>
        <View style={styles.View_492_497} />
        <View style={styles.View_492_498}>
          <Text style={styles.Text_492_498}>Location</Text>
        </View>
        <View style={styles.View_492_499} />
        <View style={styles.View_492_500}>
          <Text style={styles.Text_492_500}>Berlin,Germany</Text>
        </View>
      </View>
      <View style={styles.View_492_600}>
        <View style={styles.View_492_601}>
          <TouchableOpacity
            style={styles.TouchableOpacity_492_602}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_77"))
            }
          />
          <View style={styles.View_492_603}>
            <Text style={styles.Text_492_603}>Wi-Fi/mobile data</Text>
          </View>
        </View>
        <View style={styles.View_492_604}>
          <TouchableOpacity
            style={styles.TouchableOpacity_492_605}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_77"))
            }
          />
          <View style={styles.View_492_606}>
            <Text style={styles.Text_492_606}>Wi-Fi</Text>
          </View>
        </View>
        <View style={styles.View_492_607}>
          <TouchableOpacity
            style={styles.TouchableOpacity_492_608}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_77"))
            }
          />
          <View style={styles.View_492_609}>
            <Text style={styles.Text_492_609}>mobile data</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_492_618}>
        <Text style={styles.Text_492_618}>Privacy preferences</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/231ac85f-a4c0-4065-996d-aaff387d6f55"
        }}
        style={styles.ImageBackground_492_619}
      />
      <View style={styles.View_492_623} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 248, 251, 1)" },
  View_2: { height: hp("111%") },
  View_492_433: {
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
  View_492_434: {
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
  View_492_435: {
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
  Text_492_435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_436: {
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
  Text_492_436: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_492_437: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_492_441: {
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
  View_492_442: {
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
  View_492_443: {
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
  Text_492_443: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_444: {
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
  Text_492_444: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_492_445: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_492_449: {
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
  View_492_450: {
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
  View_492_451: {
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
  Text_492_451: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_492_452: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_492_457: {
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
  TouchableOpacity_492_458: {
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
  View_492_459: {
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
  View_492_460: {
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
  View_492_461: {
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
  View_492_462: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_492_463: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_492_465: {
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
  View_492_466: {
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
  View_492_467: {
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
  View_492_468: {
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
  ImageBackground_492_469: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_492_470: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_492_471: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_492_472: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_492_476: {
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
  ImageBackground_492_477: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_492_482: {
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
  View_492_483: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_492_483: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_492_484: {
    width: wp("33%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "center"
  },
  Text_492_484: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.44999999999999996,
    textTransform: "none"
  },
  View_502_21: {
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
  TouchableOpacity_502_13: {
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
  TouchableOpacity_492_456: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_492_456: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_492_485: {
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
  View_492_486: {
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
  View_492_487: {
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
  View_492_488: {
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
  Text_492_488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_489: {
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
  View_492_490: {
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
  Text_492_490: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_491: {
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
  View_492_492: {
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
  View_492_493: {
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
  Text_492_493: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_494: {
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
  View_492_495: {
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
  Text_492_495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_496: {
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
  View_492_497: {
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
  View_492_498: {
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
  Text_492_498: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_499: {
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
  View_492_500: {
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
  Text_492_500: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_600: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_492_601: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_492_602: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_492_603: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_492_603: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_604: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_492_605: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_492_606: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_492_606: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_607: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_492_608: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 73, 127, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_492_609: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_492_609: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_492_618: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_492_618: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_492_619: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_492_623: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("59%"),
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
