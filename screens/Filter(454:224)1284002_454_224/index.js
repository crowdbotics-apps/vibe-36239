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
      <View style={styles.View_490_66}>
        <TouchableOpacity
          style={styles.TouchableOpacity_454_225}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_77"))
          }
        >
          <View style={styles.View_454_226}>
            <View style={styles.View_454_227} />
            <View style={styles.View_454_228}>
              <View style={styles.View_454_229}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47e526d6-88bd-4c14-90f3-823560773a8c"
                  }}
                  style={styles.ImageBackground_454_230}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_454_232}>
          <View style={styles.View_454_233}>
            <View style={styles.View_454_234}>
              <View style={styles.View_454_235} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2811420c-4cbc-4481-a2da-e48d50db8f26"
                }}
                style={styles.ImageBackground_454_236}
              />
              <View style={styles.View_454_237} />
            </View>
            <View style={styles.View_454_238}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c485753-360c-4e10-baf8-b70c036a5e3b"
                }}
                style={styles.ImageBackground_454_239}
              />
            </View>
            <View style={styles.View_454_243}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e564dda6-abff-450f-875c-8a72d2e17db2"
                }}
                style={styles.ImageBackground_454_244}
              />
            </View>
          </View>
          <View style={styles.View_454_249}>
            <View style={styles.View_454_250}>
              <Text style={styles.Text_454_250}>9:27</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_473_718}>
          <Text style={styles.Text_473_718}>filter</Text>
        </View>
        <View style={styles.View_502_16}>
          <TouchableOpacity
            style={styles.TouchableOpacity_502_9}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_77"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_474_772}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_77"))
            }
          >
            <Text style={styles.Text_474_772}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_473_720} />
      <View style={styles.View_490_65}>
        <View style={styles.View_467_479} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b937e96e-0be4-45f5-87f4-b380addab533"
          }}
          style={styles.ImageBackground_467_706}
        />
        <View style={styles.View_473_719}>
          <Text style={styles.Text_473_719}>Distance preference</Text>
        </View>
        <View style={styles.View_473_721}>
          <Text style={styles.Text_473_721}>
            Only show people within this range
          </Text>
        </View>
        <View style={styles.View_474_771}>
          <Text style={styles.Text_474_771}>31 km</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cddc001f-0827-42c7-9fee-ca84a76143e5"
          }}
          style={styles.ImageBackground_473_722}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9afcc69-b0f9-453c-bfa7-116b329822e7"
          }}
          style={styles.ImageBackground_473_723}
        />
      </View>
      <View style={styles.View_490_63}>
        <View style={styles.View_474_732} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bd7ff17-67e6-4a6d-9c1a-fcf665f73678"
          }}
          style={styles.ImageBackground_474_733}
        />
        <View style={styles.View_474_734}>
          <Text style={styles.Text_474_734}>Age preference</Text>
        </View>
        <View style={styles.View_474_736}>
          <Text style={styles.Text_474_736}>
            Only show people within this range
          </Text>
        </View>
        <View style={styles.View_474_735}>
          <Text style={styles.Text_474_735}>18-40</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0f56d04-bc38-43e9-8fc9-006b522f1aff"
          }}
          style={styles.ImageBackground_474_737}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24fcc788-b5f9-4882-9b01-6378a3a7774f"
          }}
          style={styles.ImageBackground_474_738}
        />
      </View>
      <View style={styles.View_490_61}>
        <View style={styles.View_474_761}>
          <Text style={styles.Text_474_761}>Recently active Status</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c7cc057-63b4-4fde-ab91-f0391e219987"
          }}
          style={styles.ImageBackground_474_762}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfeb0c6a-8d57-433f-8fc7-75ccaff296f7"
          }}
          style={styles.ImageBackground_474_763}
        />
        <View style={styles.View_474_760} />
      </View>
      <View style={styles.View_490_64}>
        <View style={styles.View_473_725}>
          <Text style={styles.Text_473_725}>Show me</Text>
        </View>
        <View style={styles.View_473_726}>
          <Text style={styles.Text_473_726}>Women</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45ebc495-831d-49f6-a601-74fc55baa7a1"
          }}
          style={styles.TouchableOpacity_474_728}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("492_183"))
          }
        />
        <View style={styles.View_474_755} />
        <View style={styles.View_474_754} />
      </View>
      <View style={styles.View_490_58}>
        <View style={styles.View_474_740}>
          <Text style={styles.Text_474_740}>Global</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/110827bd-0a1c-4eea-9b0d-f5e068b97aa2"
          }}
          style={styles.ImageBackground_474_741}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd71429c-9638-4bab-893f-bdb1132097a4"
          }}
          style={styles.ImageBackground_474_742}
        />
        <View style={styles.View_474_756} />
        <View style={styles.View_474_757} />
      </View>
      <View style={styles.View_490_59}>
        <View style={styles.View_474_745}>
          <Text style={styles.Text_474_745}>Show me on Vibe</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c62d944-365b-4840-abb8-ac82b131fb53"
          }}
          style={styles.ImageBackground_474_746}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15cd0114-bb38-41e8-b175-50b2d170ea9b"
          }}
          style={styles.ImageBackground_474_747}
        />
        <View style={styles.View_474_758} />
      </View>
      <View style={styles.View_490_60}>
        <View style={styles.View_474_749}>
          <Text style={styles.Text_474_749}>Show Online now status</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc6ee527-951c-4dae-991a-9424c0024db4"
          }}
          style={styles.ImageBackground_474_750}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58cb717d-ab38-45a5-8d0e-0a9500d33394"
          }}
          style={styles.ImageBackground_474_751}
        />
        <View style={styles.View_474_759} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 248, 251, 1)" },
  View_2: { height: hp("111%") },
  View_490_66: {
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
  TouchableOpacity_454_225: {
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
  View_454_226: {
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
  View_454_227: {
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
  View_454_228: {
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
  View_454_229: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_454_230: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_454_232: {
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
  View_454_233: {
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
  View_454_234: {
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
  View_454_235: {
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
  ImageBackground_454_236: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_454_237: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_454_238: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_454_239: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_454_243: {
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
  ImageBackground_454_244: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_454_249: {
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
  View_454_250: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_454_250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_473_718: {
    width: wp("19%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "center"
  },
  Text_473_718: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.44999999999999996,
    textTransform: "none"
  },
  View_502_16: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("8%")
  },
  TouchableOpacity_502_9: {
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
  TouchableOpacity_474_772: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_474_772: {
    color: "rgba(241, 73, 127, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_473_720: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.49000000953674316
  },
  View_490_65: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%")
  },
  View_467_479: {
    width: wp("84%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderColor: "rgba(241, 73, 127, 1)",
    borderWidth: 2
  },
  ImageBackground_467_706: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_473_719: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_473_719: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_473_721: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_473_721: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_474_771: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_474_771: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_473_722: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_473_723: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_490_63: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%")
  },
  View_474_732: {
    width: wp("84%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderColor: "rgba(241, 73, 127, 1)",
    borderWidth: 2
  },
  ImageBackground_474_733: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_474_734: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_474_734: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_474_736: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_474_736: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_474_735: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_474_735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_474_737: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_474_738: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_490_61: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%")
  },
  View_474_761: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_474_761: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_474_762: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_474_763: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_474_760: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_490_64: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%")
  },
  View_473_725: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_473_725: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_473_726: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_473_726: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_474_728: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  View_474_755: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_474_754: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_490_58: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  View_474_740: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_474_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_474_741: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_474_742: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_474_756: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_474_757: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_490_59: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73%")
  },
  View_474_745: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_474_745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_474_746: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_474_747: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_474_758: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_490_60: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%")
  },
  View_474_749: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_474_749: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_474_750: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_474_751: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_474_759: {
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
